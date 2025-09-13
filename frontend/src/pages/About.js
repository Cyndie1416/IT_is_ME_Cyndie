import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [personalResponse, skillsResponse] = await Promise.all([
        fetch('http://localhost:5000/api/personal-info'),
        fetch('http://localhost:5000/api/skills')
      ]);
      
      const personalData = await personalResponse.json();
      const skillsData = await skillsResponse.json();
      
      setPersonalInfo(personalData);
      setSkills(skillsData);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Fallback data
      setPersonalInfo({
        description: "I'm a dedicated web developer with a passion for creating engaging digital experiences. My journey in technology has led me to explore various aspects of web development, from front-end design to back-end functionality."
      });
      setSkills([
        "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python", "Flask", 
        "Git", "Responsive Design", "UI/UX", "MongoDB", "Express.js"
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="about">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              {personalInfo?.description || "I'm a dedicated web developer with a passion for creating engaging digital experiences. My journey in technology has led me to explore various aspects of web development, from front-end design to back-end functionality."}
            </p>
            <p>
              When I'm not coding, you'll find me pursuing my hobbies and interests, which keep me 
              inspired and help me approach problems with fresh perspectives.
            </p>
            <div className="skills">
              <h3>Skills & Technologies</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
