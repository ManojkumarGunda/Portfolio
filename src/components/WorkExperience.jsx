import React, { useEffect, useState } from 'react';
import './WorkExperience.css';

const WorkExperience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      
      if (experienceSection) {
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get the section's position relative to the document
        const sectionTop = experienceSection.offsetTop;
        const sectionHeight = experienceSection.offsetHeight;
        
        // Calculate progress based on scroll position
        // Progress starts when section top enters viewport (at 50% of viewport height)
        // Progress completes when section bottom reaches 50% of viewport height
        const triggerPoint = windowHeight * 0.5; // Middle of viewport
        const sectionStart = sectionTop - triggerPoint;
        const sectionEnd = sectionTop + sectionHeight - triggerPoint;
        
        let progress = 0;
        
        if (scrollTop < sectionStart) {
          // Haven't reached the section yet
          progress = 0;
        } else if (scrollTop > sectionEnd) {
          // Scrolled past the section
          progress = 100;
        } else {
          // Scrolling through the section
          const scrolled = scrollTop - sectionStart;
          const totalScrollable = sectionEnd - sectionStart;
          progress = (scrolled / totalScrollable) * 100;
        }
        
        // Clamp between 0 and 100 and round for smooth updates
        setScrollProgress(Math.round(Math.min(100, Math.max(0, progress))));
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

    window.addEventListener('scroll', throttledScroll, { passive: true });
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
      description:
        "Collaborating with cross-functional teams to design and develop dynamic, user-focused web applications using the MERN stack. Built reusable React components and implemented RESTful APIs with Node.js and Express.js for efficient data handling. Integrated MongoDB for scalable and reliable data management, while leveraging Tailwind CSS to deliver responsive and consistent UI designs.",
        achievements: [
          "Engineered a full-stack Learning Management System (LMS) using the MERN stack, featuring modular course management, video content delivery, role-based dashboards (Admin/Instructor/Student), and optimized backend workflows.",
          "Implemented secure authentication and authorization using JWT, RBAC, and middleware-driven route protection, ensuring data integrity and controlled access across the LMS.",
          "Developed scalable RESTful APIs using Node.js and Express.js, integrating validation layers, error-handling middleware, and performance-optimized controllers.",
          "Designed and optimized MongoDB schemas with indexes and aggregation pipelines to enhance query performance and support high-volume data operations.",
          "Built a real-time communication module using Socket.io for the company ERP, enabling secure messaging, role-bound chat rooms, and event-driven updates.",
          "Delivered responsive and component-driven UI using React and Tailwind CSS, improving load performance, state predictability, and cross-device usability."
        ],
        
      technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "MongoDB",
        "REST APIs",
        "Socket.io",
        // ⭐ Added LMS tech stack
        "JWT Auth",
        "Cloud Storage (AWS/GCP)",
        "Multer",
        "Redux Toolkit"
      ],
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

                 <div 
                   className="experience-timeline" 
                   style={{ '--progress': `${scrollProgress}%` }}
                 >
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
