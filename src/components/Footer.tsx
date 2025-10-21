import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Manoj Kumar Gunda</h3>
         
          <p>Passionate about creating innovative digital solutions</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Me</h4>
          <div className="social-links">
            <a href="https://github.com/manojgunda" target="_blank" rel="noopener noreferrer" className="social-link">
              {FaGithub({ size: 20 })}
            </a>
            <a href="https://www.linkedin.com/in/manoj-gunda-4482b2231/" target="_blank" rel="noopener noreferrer" className="social-link">
              {FaLinkedin({ size: 20 })}
            </a>
            <a href="https://wa.me/7013247808" target="_blank" rel="noopener noreferrer" className="social-link">
              {FaWhatsapp({ size: 20 })}
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 Guntur, Andhra Pradesh</p>
          <p>📧 manojgunda08@gmail.com</p>
          <p>📞 +91 7013247808</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          <p>
            © 2025 Manoj Kumar Gunda. All rights reserved. 
            
          </p>
        </div>
      </div>
      
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
          {FaArrowUp({ size: 20 })}
        </button>
      )}
    </footer>
  );
};

export default Footer;
