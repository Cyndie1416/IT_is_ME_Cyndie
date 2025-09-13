from flask import Flask, jsonify, request
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Sample data - in production, this would come from a database
projects_data = [
    {
        "id": 1,
        "title": "E-Commerce Website",
        "description": "A fully responsive e-commerce platform built with modern web technologies, featuring user authentication, shopping cart, and payment integration.",
        "technologies": ["React", "Node.js", "MongoDB"],
        "image": "/images/ecommerce.jpg",
        "github_url": "https://github.com/cyndie/ecommerce",
        "live_url": "https://ecommerce-demo.com"
    },
    {
        "id": 2,
        "title": "Task Management App",
        "description": "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
        "technologies": ["Vue.js", "Express", "Socket.io"],
        "image": "/images/taskapp.jpg",
        "github_url": "https://github.com/cyndie/taskapp",
        "live_url": "https://taskapp-demo.com"
    },
    {
        "id": 3,
        "title": "Data Visualization Dashboard",
        "description": "An interactive dashboard for data analysis and visualization, featuring multiple chart types and real-time data updates.",
        "technologies": ["D3.js", "Python", "Flask"],
        "image": "/images/dashboard.jpg",
        "github_url": "https://github.com/cyndie/dashboard",
        "live_url": "https://dashboard-demo.com"
    }
]

hobbies_data = [
    {
        "id": 1,
        "name": "Photography",
        "description": "Capturing moments and exploring different perspectives through the lens. I enjoy both digital and film photography.",
        "icon": "fas fa-camera"
    },
    {
        "id": 2,
        "name": "Reading",
        "description": "I love diving into books about technology, design, and personal development. Always learning something new.",
        "icon": "fas fa-book"
    },
    {
        "id": 3,
        "name": "Hiking",
        "description": "Exploring nature trails and mountains. It's my way of disconnecting and finding inspiration in the outdoors.",
        "icon": "fas fa-hiking"
    },
    {
        "id": 4,
        "name": "Digital Art",
        "description": "Creating digital illustrations and experimenting with different art styles. It complements my web design work perfectly.",
        "icon": "fas fa-palette"
    },
    {
        "id": 5,
        "name": "Music",
        "description": "Playing guitar and discovering new music. Music often inspires my creative process and helps me focus while coding.",
        "icon": "fas fa-music"
    },
    {
        "id": 6,
        "name": "Gaming",
        "description": "Enjoying both indie and AAA games. Gaming helps me understand user experience and interface design from a different perspective.",
        "icon": "fas fa-gamepad"
    }
]

skills_data = [
    "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python", "Flask", 
    "Git", "Responsive Design", "UI/UX", "MongoDB", "Express.js"
]

personal_info = {
    "name": "Cyndie",
    "title": "Web Developer & Creative Professional",
    "email": "hello@cyndie.dev",
    "phone": "Available upon request",
    "location": "Remote / Available Worldwide",
    "description": "I'm a dedicated web developer with a passion for creating engaging digital experiences. My journey in technology has led me to explore various aspects of web development, from front-end design to back-end functionality.",
    "social_links": {
        "linkedin": "https://linkedin.com/in/cyndie",
        "github": "https://github.com/cyndie",
        "twitter": "https://twitter.com/cyndie",
        "instagram": "https://instagram.com/cyndie"
    }
}

# API Routes
@app.route('/api/personal-info', methods=['GET'])
def get_personal_info():
    return jsonify(personal_info)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    return jsonify(projects_data)

@app.route('/api/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    project = next((p for p in projects_data if p['id'] == project_id), None)
    if project:
        return jsonify(project)
    return jsonify({'error': 'Project not found'}), 404

@app.route('/api/hobbies', methods=['GET'])
def get_hobbies():
    return jsonify(hobbies_data)

@app.route('/api/skills', methods=['GET'])
def get_skills():
    return jsonify(skills_data)

@app.route('/api/contact', methods=['POST'])
def contact_form():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Email validation
        import re
        email_pattern = r'^[^\s@]+@[^\s@]+\.[^\s@]+$'
        if not re.match(email_pattern, data['email']):
            return jsonify({'error': 'Invalid email format'}), 400
        
        # In production, you would save this to a database or send an email
        print(f"New contact form submission:")
        print(f"Name: {data['name']}")
        print(f"Email: {data['email']}")
        print(f"Subject: {data['subject']}")
        print(f"Message: {data['message']}")
        
        return jsonify({'message': 'Thank you for your message! I\'ll get back to you soon.'})
    
    except Exception as e:
        return jsonify({'error': 'An error occurred processing your request'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'API is running'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
