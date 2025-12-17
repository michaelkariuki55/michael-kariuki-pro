import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const ContactSchema = z.object({
  name: z.string().min(2, "Name too short").max(100, "Name too long").trim(),
  email: z.string().email("Invalid email").max(255).toLowerCase().trim(),
  subject: z.string().min(3, "Subject too short").max(200, "Subject too long").trim(),
  message: z.string().min(10, "Message too short").max(5000, "Message too long").trim(),
});

// HTML escaping function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Validate input
    const parseResult = ContactSchema.safeParse(body);
    if (!parseResult.success) {
      console.error("Validation error:", parseResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Invalid input", details: parseResult.error.errors }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, subject, message } = parseResult.data;

    console.log("Received contact form submission:", { name, email, subject });

    // Initialize Supabase client with service role key
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // Save message to database
    const { error: dbError } = await supabase
      .from("contact_messages")
      .insert({ name, email, subject, message });

    if (dbError) {
      console.error("Error saving to database:", dbError);
    } else {
      console.log("Message saved to database");
    }

    // Send email via Resend with escaped HTML
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <onboarding@resend.dev>",
        to: ["michaelkariuki281@gmail.com"],
        subject: `New Contact: ${escapeHtml(subject)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <h3>Message:</h3>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
        reply_to: email,
      }),
    });

    const data = await res.json();
    console.log("Email response:", data);

    if (!res.ok) {
      throw new Error(data.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
