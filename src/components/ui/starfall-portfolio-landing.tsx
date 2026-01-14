import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink { label: string; href: string; }
interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode; };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void; };
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;
    
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.display = 'block';
    currentMount.appendChild(renderer.domElement);
    
    const material = new THREE.ShaderMaterial({
      uniforms: { 
        iTime: { value: 0 }, 
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } 
      },
      vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        
        #define NUM_OCTAVES 3
        
        float rand(vec2 n) { 
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); 
        }
        
        float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 u = fract(p);
          u = u * u * (3.0 - 2.0 * u);
          float res = mix(
            mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
            mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
            u.y
          );
          return res * res;
        }
        
        float fbm(vec2 x) {
          float v = 0.0;
          float a = 0.3;
          vec2 shift = vec2(100);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < NUM_OCTAVES; ++i) {
            v += a * noise(x);
            x = rot * x * 2.0 + shift;
            a *= 0.5;
          }
          return v;
        }
        
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          float time = iTime * 0.15;
          
          vec2 p = uv * 3.0;
          float f = fbm(p + time);
          f = fbm(p + f + time * 0.5);
          
          // Deep navy to teal color scheme matching Michael's portfolio
          vec3 color1 = vec3(0.07, 0.09, 0.15); // Deep navy
          vec3 color2 = vec3(0.1, 0.15, 0.25);  // Navy light
          vec3 color3 = vec3(0.15, 0.55, 0.55); // Teal accent
          
          vec3 color = mix(color1, color2, f);
          color = mix(color, color3, f * f * 0.3);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
    
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    let animationFrameId: number;
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
    };
    
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

// --- DEFAULT DATA ---
const defaultData: {
  logo: { initials: React.ReactNode; name: React.ReactNode };
  navLinks: NavLink[];
  resume: { label: string; onClick?: () => void };
  hero: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode };
  ctaButtons: { primary: { label: string; onClick?: () => void }; secondary: { label: string; onClick?: () => void } };
  projects: Project[];
  stats: Stat[];
} = {
  logo: { initials: 'MK', name: 'Michael Kariuki' },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
  ],
  resume: { label: 'Resume' },
  hero: {
    titleLine1: 'Creative Developer &',
    titleLine2Gradient: 'Digital Designer',
    subtitle: 'I craft beautiful digital experiences through code and design. Specializing in modern web development, UI/UX design, and bringing innovative ideas to life.',
  },
  ctaButtons: {
    primary: { label: 'View My Work' },
    secondary: { label: 'Get In Touch' },
  },
  projects: [
    { title: 'FinTech Mobile App', description: 'React Native app with AI-powered financial insights.', tags: ['React Native', 'Node.js'] },
    { title: 'Data Visualization Platform', description: 'Interactive dashboard for complex data analysis.', tags: ['D3.js', 'Python'] },
    { title: '3D Portfolio Site', description: 'Immersive WebGL experience with 3D elements.', tags: ['Three.js', 'WebGL'] },
  ],
  stats: [
    { value: '50+', label: 'Projects Completed' },
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Happy Clients' },
  ],
};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  resume = defaultData.resume,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  projects = defaultData.projects,
  stats = defaultData.stats,
  showAnimatedBackground = true,
}) => {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      {showAnimatedBackground && <AuroraBackground />}
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center font-bold text-sm">
                {logo.initials}
              </div>
              <span className="font-medium hidden sm:block">{logo.name}</span>
            </div>
            
            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Resume Button */}
            <button
              onClick={resume.onClick}
              className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
            >
              {resume.label}
            </button>
          </div>
        </nav>
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white/90">{hero.titleLine1}</span>
                <span className="block bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                  {hero.titleLine2Gradient}
                </span>
              </h1>
            </div>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              {hero.subtitle}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              <button
                onClick={ctaButtons.primary.onClick}
                className="px-8 py-3 text-sm font-medium bg-gradient-to-r from-teal-500 to-cyan-400 text-gray-900 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-teal-500/25"
              >
                {ctaButtons.primary.label}
              </button>
              <button
                onClick={ctaButtons.secondary.onClick}
                className="px-8 py-3 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
              >
                {ctaButtons.secondary.label}
              </button>
            </div>
            
            {/* Decorative Orbit */}
            <div className="relative w-full max-w-3xl mx-auto h-64 hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-white/10" />
                <div className="absolute w-48 h-48 rounded-full border border-white/5" />
                <div className="absolute w-64 h-64 rounded-full border border-white/5" />
              </div>
            </div>
            
            {/* Projects Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-left animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-full h-32 rounded-lg bg-gradient-to-br from-white/10 to-white/5 mb-4 flex items-center justify-center text-4xl">
                    {project.imageContent}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white/90">{project.title}</h3>
                  <p className="text-sm text-white/50 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/10 rounded-full text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16" />
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                  </div>
                  {index < stats.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-white/10" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { PortfolioPage, AuroraBackground };
