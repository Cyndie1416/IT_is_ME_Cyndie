import React, { useState, useEffect } from 'react';
import './Hobbies.css';

const Hobbies = () => {
  const [hobbies, setHobbies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHobbies();
  }, []);

  const fetchHobbies = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hobbies');
      const data = await response.json();
      setHobbies(data);
    } catch (error) {
      console.error('Error fetching hobbies:', error);
      // Fallback data
      setHobbies([
        {
          id: 1,
          name: "Photography",
          description: "Capturing moments and exploring different perspectives through the lens. I enjoy both digital and film photography.",
          icon: "fas fa-camera"
        },
        {
          id: 2,
          name: "Reading",
          description: "I love diving into books about technology, design, and personal development. Always learning something new.",
          icon: "fas fa-book"
        },
        {
          id: 3,
          name: "Hiking",
          description: "Exploring nature trails and mountains. It's my way of disconnecting and finding inspiration in the outdoors.",
          icon: "fas fa-hiking"
        },
        {
          id: 4,
          name: "Digital Art",
          description: "Creating digital illustrations and experimenting with different art styles. It complements my web design work perfectly.",
          icon: "fas fa-palette"
        },
        {
          id: 5,
          name: "Music",
          description: "Playing guitar and discovering new music. Music often inspires my creative process and helps me focus while coding.",
          icon: "fas fa-music"
        },
        {
          id: 6,
          name: "Gaming",
          description: "Enjoying both indie and AAA games. Gaming helps me understand user experience and interface design from a different perspective.",
          icon: "fas fa-gamepad"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="hobbies">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading hobbies...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hobbies">
      <div className="container">
        <h2 className="section-title">My Hobbies & Interests</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby) => (
            <div key={hobby.id} className="hobby-card">
              <div className="hobby-icon">
                <i className={hobby.icon}></i>
              </div>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
