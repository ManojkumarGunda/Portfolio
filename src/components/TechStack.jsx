import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaJs, FaPython, FaLock } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiNginx, SiMongodb, SiPostgresql, SiPandas, SiNumpy } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      id: 1,
      name: "React.js",
      icon: FaReact,
      color: "#61DAFB"
    },
    {
      id: 2,
      name: "Node.js",
      icon: FaNodeJs,
      color: "#339933"
    },
    {
      id: 3,
      name: "Express.js",
      icon: SiExpress,
      color: "#ffffff"
    },
    {
      id: 4,
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248"
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4"
    },
    {
      id: 6,
      name: "AWS",
      icon: FaAws,
      color: "#FF9900"
    },
    {
      id: 7,
      name: "JavaScript",
      icon: FaJs,
      color: "#F7DF1E"
    },
    {
      id: 9,
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "#336791"
    },
    {
      id: 10,
      name: "Nginx Load Balancer",
      icon: SiNginx,
      color: "#009639"
    },
    
    
    {
      id: 13,
      name: "JWT Auth",
      icon: FaLock,
      color: "#FF6B35"
    },
    {
      id: 14,
      name: "Python",
      icon: FaPython,
      color: "#3776AB"
    },
    {
      id: 15,
      name: "Pandas",
      icon: SiPandas,
      color: "#150458"
    },
    {
      id: 16,
      name: "NumPy",
      icon: SiNumpy,
      color: "#013243"
    }
  ];

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="tech-stack-container">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">Technologies and tools I've worked with in my professional experience.</p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div 
                key={tech.id} 
                className="tech-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tech-icon" style={{ color: tech.color }}>
                  {IconComponent({ size: 32 })}
                </div>
                <h3 className="tech-name">{tech.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
