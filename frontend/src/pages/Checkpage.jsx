import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const PortfolioWebsite = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const projectsData = [
    {
      id: '01',
      title: 'The Real Hotels',
      description: 'LUXURY HOTEL BOOKING PLATFORM',
      skills: ['WEB DESIGN', 'WEBFLOW DEV', 'ART DIRECTION', 'ANIMATION']
    },
    {
      id: '02',
      title: 'Codex',
      description: 'THE MOST ACCURATE AND RELIABLE API FOR BLOCKCHAIN DATA',
      skills: ['WEB DESIGN', 'WEBFLOW DEV', 'ANIMATION', 'ART DIRECTION', '3D CREATION']
    }
  ];

  // Project images
  const projectImages = [
    "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
  ];

  // Background images for each project
  const backgrounds = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3", // Warm earthy tones
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"  // Tech/digital background
  ];

  const projectsRef = useRef([]);
  const containerRef = useRef(null);
  
  // Handle scrolling and determine active project
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Determine which project is in view
      projectsRef.current.forEach((project, index) => {
        if (project) {
          const rect = project.getBoundingClientRect();
          if (rect.top < window.innerHeight/2 && rect.bottom > window.innerHeight/2) {
            setActiveProject(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const formatDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'AM' : 'AM'; // Set to AM as shown in images
    const hour = hours % 12 || 12;
    return `${hour}:${minutes} ${ampm} [UK]`;
  };

  const formattedDate = formatDate();
  const currentDate = 'MAY 3, 2025';

  return (
    <div className="bg-black text-white font-mono" ref={containerRef}>
      {/* Fixed background that changes based on active project */}
      <div 
        className="fixed inset-0 w-full h-full z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${backgrounds[activeProject]})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Fixed elements - Navigation */}
      <div className="fixed left-0 top-0 p-4 z-50">
        <div className="space-y-2">
          <div className="flex items-center bg-purple-700 rounded px-3 py-1 cursor-pointer">
            <span className="text-xs mr-2">01</span>
            <span className="text-xs">INFO</span>
          </div>
          <div className="flex items-center bg-purple-700 bg-opacity-50 rounded px-3 py-1 cursor-pointer">
            <span className="text-xs mr-2">02</span>
            <span className="text-xs">WORK</span>
          </div>
          <div className="flex items-center bg-purple-700 bg-opacity-50 rounded px-3 py-1 cursor-pointer">
            <span className="text-xs mr-2">03</span>
            <span className="text-xs">ARCHIVE</span>
          </div>
          <div className="flex items-center bg-purple-700 bg-opacity-50 rounded px-3 py-1 cursor-pointer">
            <span className="text-xs mr-2">04</span>
            <span className="text-xs">CONTACT</span>
          </div>
        </div>
      </div>

      {/* Fixed elements - Header */}
      <div className="fixed right-0 top-0 p-4 text-right z-50">
        <div className="text-xs">
          <div className="font-bold">JORDAN GILROY</div>
          <div className="text-gray-400">DIGITAL DESIGNER</div>
        </div>
        <div className="text-xs mt-1">
          <div>{formattedDate}</div>
          <div>{currentDate}</div>
        </div>
      </div>

      {/* Scrollable project sections */}
      {projectsData.map((project, index) => (
        <section 
          key={index}
          ref={el => projectsRef.current[index] = el} 
          className="relative h-screen w-full flex items-center justify-center z-10"
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
          }}
        >
          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center px-4">
            {/* Project image - fixed position only when this section is active */}
            <div className="w-full md:w-1/2 flex justify-center relative">
              <div 
                className={`w-full max-w-md transition-opacity duration-700 ${activeProject === index ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  position: activeProject === index ? 'fixed' : 'relative',
                  top: activeProject === index ? '50%' : 'auto',
                  transform: activeProject === index ? 'translateY(-50%)' : 'none',
                  left: activeProject === index ? '25%' : 'auto',
                  marginLeft: activeProject === index ? '-100px' : '0',
                  zIndex: 30
                }}
              >
                <img 
                  src={projectImages[index]} 
                  alt={project.title}
                  className="w-full h-auto rounded shadow-lg"
                />
              </div>
            </div>
            
            {/* Project details */}
            <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 md:pl-16">
              <div className="text-xs text-gray-400">[{project.id}]</div>
              <h2 className="text-4xl font-serif mt-2">{project.title}</h2>
              
              <div className="mt-16">
                <div className="text-xs space-y-1">
                  {project.skills.map((skill, idx) => (
                    <div key={idx}>{skill}</div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-8">
                  <button className="flex items-center text-xs">
                    VIEW PROJECT <ChevronRight size={14} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Visual indicator of active project */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="flex space-x-2">
          {projectsData.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full ${activeProject === index ? 'bg-purple-500' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioWebsite;