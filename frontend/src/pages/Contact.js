import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    fetchPersonalInfo();
  }, []);

  const fetchPersonalInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/personal-info');
      const data = await response.json();
      setPersonalInfo(data);
    } catch (error) {
      console.error('Error fetching personal info:', error);
      // Fallback data
      setPersonalInfo({
        email: "cyndie@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        social_links: {
          linkedin: "#",
          github: "#",
          twitter: "#",
          instagram: "#"
        }
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out!</p>
            {personalInfo && (
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            )}
            {personalInfo?.social_links && (
              <div className="social-links">
                <a href={personalInfo.social_links.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={personalInfo.social_links.github} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href={personalInfo.social_links.twitter} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={personalInfo.social_links.instagram} className="social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            )}
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
