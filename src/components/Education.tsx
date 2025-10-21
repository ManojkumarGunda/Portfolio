import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "SRM UNIVERSITY",
      year: "2021 - 2025",
      percentage: "7.4/10 CGPA",
      description: "Artificial Intelligence and Machine Learning",
      keyCourses: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems  ",
       
      ]
    },
    {
      degree: "Board of Intermediate Education",
      institution: "Sri Chaitanya College - Guntur",
      year: "2019 - 2021",
      percentage: "937/1000",
      description: "Completed higher secondary education with Mathematics and Science stream.",
      keyCourses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
       
      ]
    },
    {
      degree: "Secondary School Education -",
  institution: "OXFORD SCHOOL -NARASARAOPET",
      year: "2019",
      percentage: "8.5/10 CGPA",
      description: "Completed secondary education with excellent academic performance.",
      keyCourses: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-underline"></div>
        </div>
        
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-icon">
                <div className="icon-circle">
                  <span className="icon">🎓</span>
                </div>
                <div className="timeline-line"></div>
              </div>
              
              <div className="education-content">
                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <span className="percentage">{edu.percentage}</span>
                </div>
                
                <div className="education-details">
                  <p className="institution">{edu.institution}</p>
                  <p className="year">{edu.year}</p>
                </div>
                
                <p className="description">{edu.description}</p>
                
                {edu.keyCourses && (
                  <div className="key-courses">
                    <h4 className="courses-title">Key Courses:</h4>
                    <ul className="courses-list">
                      {edu.keyCourses.map((course, courseIndex) => (
                        <li key={courseIndex} className="course-item">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
