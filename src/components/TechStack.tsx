import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaJs } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiChakraui } from 'react-icons/si';
import './TechStack.css';

const TechStack: React.FC = () => {
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
      icon: FaDatabase,
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
      id: 8,
      name: "Chakra UI",
      icon: SiChakraui,
      color: "#0081CB"
    },
    {
      id: 9,
      name: "PostgreSQL",
      icon: FaDatabase,
      color: "#336791"
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
