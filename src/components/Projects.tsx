import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Projects.css';

type Project = {
  id: number;
  title: string;
  description: string | string[];
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  category?: string;
};

const Projects: React.FC = () => {
  const BriefcaseIcon = FaBriefcase as unknown as React.ComponentType<{ size?: number }>;
  const projectsData: Project[] = [
    {
      id: 1,
      title: "LEARNING MANAGEMENT SYSTEM (LMS)",
      description: [
        "Built a full-stack LMS using MERN stack with secure authentication and role-based access (Admin, Instructor, Student).",
        "Implemented course management features including creation, enrollment, and progress tracking.",
        "Deployed backend services with Nginx load balancer for improved scalability and traffic distribution.",
        "Enhanced user experience with responsive UI and real-time progress updates using React and Tailwind CSS."
      ],
      image: "📚",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nginx"],
      githubLink: "https://github.com/ManojkumarGunda/LMS",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Built a responsive and modern e-commerce frontend interface using React.js and Tailwind CSS, with features like product listing, filtering, and cart functionality. Designed reusable UI components to streamline development and maintain consistent styling across the application. Focused on user experience and performance optimization, ensuring fast load times and intuitive navigation.",
      image: "🛒",
      technologies: ["React", "Tailwind CSS", "javascript"],
      githubLink: "https://github.com/ManojkumarGunda/E-commerce",
    },
    {
      id: 3,
      title: " Analytics Dashboard",
      description:"I developed a responsive and modular web analytics dashboard designed to track essential website metrics such as user traffic, bounce rate, and session duration. By integrating REST APIs with Axios, I enabled the dashboard to display real-time data through interactive overview cards, charts, and tables. To ensure a clean, accessible, and responsive design, I implemented Chakra UI components, focusing on usability and consistency. Following a component-driven development approach, I built the project with reusability, scalability, and maintainability in mind—making it both efficient and future-ready",
      image: "📋",
      technologies: ["React", "Node.js", "Express.js", "Chakra UI", "MongoDB"],
      githubLink: "https://github.com/ManojkumarGunda/Analytics_Dashboard",
      category: "Frontend"
    },
    {
      id: 4,
      title: " MALICIOUS URL DETECTION USING MACHINE LEARNING",
      description: "I developed a machine learning-based system to identify and classify potentially malicious URLs, ensuring early detection of harmful websites. By leveraging algorithms such as decision trees and neural networks, the system effectively analyzed URL features and patterns, achieving a detection accuracy of over 95%. To further enhance reliability, I implemented a robust ensemble model using advanced techniques like Random Forest, XGBoost, Gradient Boosting, and AdaBoost, resulting in a highly accurate and scalable solution for web security.",
      image: "🌤️",
      technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "OpenWeather API"],
      
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">Here are some of the projects I've worked on</p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="project-icon">
                  {project.image === '💼' ? React.createElement(BriefcaseIcon, { size: 48 }) : project.image}
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveLink && (
                      <a href={project.liveLink} className="project-link live" target="_blank" rel="noopener noreferrer">
                        <span>🌐</span> Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
                        <span>📁</span> Code
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-category">{project.category}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {Array.isArray(project.description) ? (
                  <ul className="project-description project-description-list">
                    {project.description.map((line: string, i: number) => (
                      <li key={i} className="project-description-item">{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="project-description">{project.description}</p>
                )}
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
