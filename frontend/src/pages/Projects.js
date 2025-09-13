import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/projects');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback data
      setProjects([
        {
          id: 1,
          title: "E-Commerce Website",
          description: "A fully responsive e-commerce platform built with modern web technologies, featuring user authentication, shopping cart, and payment integration.",
          technologies: ["React", "Node.js", "MongoDB"],
          github_url: "#",
          live_url: "#"
        },
        {
          id: 2,
          title: "Task Management App",
          description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
          technologies: ["Vue.js", "Express", "Socket.io"],
          github_url: "#",
          live_url: "#"
        },
        {
          id: 3,
          title: "Data Visualization Dashboard",
          description: "An interactive dashboard for data analysis and visualization, featuring multiple chart types and real-time data updates.",
          technologies: ["D3.js", "Python", "Flask"],
          github_url: "#",
          live_url: "#"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="projects">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.live_url} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a 
                    href={project.github_url} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
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
