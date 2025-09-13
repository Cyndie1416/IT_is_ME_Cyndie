import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [loading, setLoading] = useState(true);

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
        name: "Cyndie",
        title: "Web Developer & Creative Professional",
        description: "I'm a dedicated web developer with a passion for creating engaging digital experiences. My journey in technology has led me to explore various aspects of web development, from front-end design to back-end functionality."
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="hero loading">
        <div className="hero-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{personalInfo?.name || 'Cyndie'}</span>
          </h1>
          <p className="hero-subtitle">{personalInfo?.title || 'Web Developer & Creative Professional'}</p>
          <p className="hero-description">
            {personalInfo?.description || "Passionate about creating beautiful, functional websites and exploring new technologies. Welcome to my digital space where I showcase my work and share my interests."}
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-card">
            <div className="profile-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
