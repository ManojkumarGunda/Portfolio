import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For now, just log the data
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-underline"></div>
          <p className="section-subtitle">I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.</p>
        </div>

        <div className="contact-content">
          {/* Left Column - Contact Information & Social Links */}
          <div className="contact-info-container">
            {/* Contact Information */}
            <div className="info-section">
              <h3 className="info-title">Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon email-icon">
                    {FaEnvelope({ size: 20 })}
                  </div>
                  <span>manojgunda08@gmail.com</span>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon phone-icon">
                    {FaPhone({ size: 20 })}
                  </div>
                  <span>+91 7013247808</span>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon location-icon">
                    {FaMapMarkerAlt({ size: 20 })}
                  </div>
                  <span>Guntur, Andhra Pradesh</span>
                </div>
              </div>
            </div>

            {/* Follow Me */}
            <div className="info-section">
              <h3 className="info-title">Follow Me</h3>
              <div className="social-icons">
                <a href="https://github.com/ManojkumarGunda" className="social-icon" target="_blank" rel="noopener noreferrer">
                  {FaGithub({ size: 28 })}
                </a>
                <a href="https://www.linkedin.com/in/manoj-kumar-gunda-4482b2231/" className="social-icon" target="_blank" rel="noopener noreferrer">
                  {FaLinkedin({ size: 28 })}
                </a>
                <a href="https://wa.me/7013247808" className="social-icon" target="_blank" rel="noopener noreferrer">
                  {FaWhatsapp({ size: 28 })}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Send a Message Form */}
          <div className="contact-form-container">
            <h3 className="form-title">Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={errors.message ? 'error' : ''}
                  required
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  ✗ Something went wrong. Please try again or contact me directly.
                </div>
              )}
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
