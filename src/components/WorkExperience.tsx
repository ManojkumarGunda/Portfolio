import React, { useEffect, useState } from 'react';
import './WorkExperience.css';

const WorkExperience: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
          const totalHeight = rect.height;
          const progress = Math.min(100, Math.max(0, (visibleHeight / totalHeight) * 100));
          
          // More granular progress calculation for smoother timeline filling
          if (progress >= 90) {
            setScrollProgress(100);
          } else if (progress >= 70) {
            setScrollProgress(75);
          } else if (progress >= 50) {
            setScrollProgress(50);
          } else if (progress >= 25) {
            setScrollProgress(25);
          } else if (progress >= 10) {
            setScrollProgress(10);
          } else {
            setScrollProgress(0);
          }
        }
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const workData = [
    {
      id: 1,
company: "Navikshaa Technologies",
position: "MERN Stack Developer",
duration: "May 2025 - Present",
location: "On site - Bangalore",
type: "Intern",
description: "Collaborating with cross-functional teams to design and develop dynamic, user-focused web applications using the MERN stack. Built reusable React components and implemented RESTful APIs with Node.js and Express.js for efficient data handling. Integrated MongoDB for scalable and reliable data management, while leveraging Tailwind CSS to deliver responsive and consistent UI designs.",
achievements: [
  "Developed a WhatsApp-style real-time chat application integrated into the company ERP, enabling secure communication and role-based chat features.",
  "Designed and implemented secure REST APIs, ensuring smooth data flow and robust application security.",
  "Optimized MongoDB queries and schema design, improving data retrieval efficiency.",
  "Enhanced UI/UX consistency with Tailwind CSS, resulting in improved responsiveness across devices.",
  "Built and deployed end-to-end MERN stack applications that improved scalability and performance."
],
technologies: ["React", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "REST APIs", "Socket.io"],
logo: "💼"

    },
    {
      id: 2,
      company: "APSSDC.",
      position: "Data Analysis",
      duration: "June 2023 – August 2023",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Worked on a Screen Time Analysis project to study smartphone usage patterns across various applications. Utilized Python for data collection, cleaning, and preprocessing from smartphone usage logs, followed by trend and pattern analysis of app usage data. Designed and developed data visualizations using Matplotlib and Seaborn to effectively communicate insights and present findings to stakeholders.",
      achievements: [
        "Conducted an end-to-end data analysis project on smartphone app usage patterns.",
        "Cleaned and preprocessed raw data, improving data quality and reliability for analysis.",
        "Discovered key trends in screen time distribution across multiple applications.",
        "Created visual reports and dashboards using Matplotlib and Seaborn, enhancing stakeholder understanding."
      ],
      technologies: ["Python (Pandas, NumPy)", "Matplotlib", "Seaborn", "Jupyter Notebook", "Excel"],
      logo: "🚀"
    }
    
    
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">My professional journey and achievements</p>
        </div>

                 <div className={`experience-timeline progress-${scrollProgress}`}>
           {workData.map((job, index) => (
            <div key={job.id} className="experience-item">
              <div className="experience-icon">
                <div className="icon-circle">
                  <span className="icon">{job.logo}</span>
                </div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="job-info">
                    <h3 className="position">{job.position}</h3>
                    <h4 className="company">{job.company}</h4>
                  </div>
                  <div className="job-meta">
                    <span className="duration">{job.duration}</span>
                    <span className="location">{job.location}</span>
                    <span className="job-type">{job.type}</span>
                  </div>
                </div>
                
                <p className="description">{job.description}</p>
                
                <div className="achievements">
                  <h5 className="achievements-title">Key Achievements:</h5>
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  {job.technologies.map((tech, techIndex) => (
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

export default WorkExperience;
