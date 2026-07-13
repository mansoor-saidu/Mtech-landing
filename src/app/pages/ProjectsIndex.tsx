import React, { useState } from 'react';
import { Link } from 'react-router';
import { projectsData } from '../data/projectsData';

export default function ProjectsIndex() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fcfaf8] dark:bg-[#1a1a19] text-[#1a1a19] dark:text-[#fcfaf8] pt-24 pb-32 px-6 md:px-12 lg:px-24 font-serif selection:bg-[#1a1a19] selection:text-[#fcfaf8] dark:selection:bg-[#fcfaf8] dark:selection:text-[#1a1a19] transition-colors duration-500">
      
      {/* Floating Image Reveal (Only on Desktop) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 hidden lg:flex items-center justify-center opacity-0 transition-opacity duration-700 ease-in-out"
        style={{ opacity: hoveredImage ? 0.15 : 0 }}
      >
        {hoveredImage && (
          <img 
            src={hoveredImage} 
            alt="Project Preview" 
            className="w-full h-full object-cover filter grayscale blur-[2px]"
          />
        )}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-24 text-center">
          <Link to="/" className="text-xs font-sans font-medium tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity mb-12 inline-block border-b border-current pb-1">
            Return to Preface
          </Link>
          <div className="flex flex-col items-center">
            <span className="text-sm font-sans tracking-[0.3em] uppercase opacity-50 mb-6">Index</span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-8">
              Case Studies
            </h1>
            <div className="w-16 h-px bg-current opacity-30 mb-8"></div>
            <p className="text-lg md:text-xl font-style-italic max-w-2xl leading-relaxed opacity-80 italic">
              A curated anthology of platforms, dashboards, and digital experiences. 
              Drafted with precision, bound by performance.
            </p>
            <p className="text-xs font-sans tracking-[0.15em] uppercase opacity-40 mt-6">
              Published with client consent
            </p>
          </div>
        </header>

        <div className="flex flex-col border-t border-current/10">
          {projectsData.map((project, index) => {
            const chapterNum = String(index + 1).padStart(2, '0');
            
            return (
              <Link 
                to={`/projects/${project.slug}`} 
                key={project.slug}
                onMouseEnter={() => setHoveredImage(project.heroImage)}
                onMouseLeave={() => setHoveredImage(null)}
                className="group relative flex flex-col md:flex-row items-baseline py-8 border-b border-current/10 hover:bg-current/5 transition-colors duration-300"
              >
                {/* Chapter Number */}
                <div className="text-sm font-sans tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity md:w-24 mb-2 md:mb-0">
                  CH.{chapterNum}
                </div>

                {/* Title & Category */}
                <div className="flex-grow flex flex-col md:flex-row md:items-baseline md:justify-between w-full">
                  <h2 className="text-3xl md:text-4xl font-normal group-hover:italic transition-all duration-300">
                    {project.title}
                  </h2>
                  
                  {/* Dot Leaders (hidden on mobile) */}
                  <div className="hidden md:block flex-grow border-b border-dotted border-current/20 mx-6 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <span className="text-xs font-sans tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity mt-2 md:mt-0 text-left md:text-right">
                    {project.category}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        
        <footer className="mt-32 text-center">
          <div className="w-px h-16 bg-current/20 mx-auto mb-8"></div>
          <p className="text-sm font-sans tracking-[0.1em] opacity-40 uppercase mb-6">End of Index</p>
          <div className="max-w-lg mx-auto border-t border-current/10 pt-8">
            <p className="text-xs font-sans leading-relaxed opacity-50 italic">
              * These case studies are published with explicit client consent. Additional projects exist under non-disclosure agreements or have not been included at the client's request. Our full body of work extends beyond what is shown here.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
