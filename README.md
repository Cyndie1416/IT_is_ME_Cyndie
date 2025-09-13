# Cyndie's Personal Portfolio Website

A modern, responsive personal portfolio website showcasing my work, skills, and interests. Built with multiple technology stacks for flexibility and learning.

## 🚀 Quick Start Options

You have **3 different ways** to run this website locally:

### Option 1: Standalone HTML (Simplest)
**Perfect for quick previews and demonstrations**

1. Simply double-click on `index.html` or open it in any web browser
2. All functionality works except for the contact form submission (which requires the backend)

### Option 2: Full-Stack Development (Recommended)
**Complete experience with backend API**

#### Prerequisites
- Python 3.7+ (you have Python 3.13.7 ✅)
- Node.js 14+ (you have Node.js v22.18.0 ✅)

#### Setup Instructions

1. **Start the Backend (Flask API)**
   ```bash
   cd backend
   python -m pip install -r requirements.txt
   python app.py
   ```
   The API will be available at: http://localhost:5000

2. **Start the Frontend (React App)**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The website will open at: http://localhost:3000

3. **Or use the automated script**
   ```bash
   # From the root directory
   start-dev.bat
   ```

### Option 3: Production Build
**Optimized version for deployment**

1. Build the React frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Serve the built files with any static file server or deploy to platforms like Netlify, Vercel, etc.

## 🛠️ Technology Stack

### Frontend
- **HTML5/CSS3/JavaScript**: Standalone version with modern styling
- **React**: Interactive single-page application
- **Responsive Design**: Mobile-first approach
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Backend
- **Flask**: Python web framework
- **Flask-CORS**: Cross-origin resource sharing
- **RESTful API**: Clean API endpoints

## 📁 Project Structure

```
IT_is_ME_Cyndie/
├── index.html              # Standalone HTML version
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── start-dev.bat           # Development startup script
├── backend/
│   ├── app.py              # Flask API server
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── src/                # React source code
│   ├── public/             # Static assets
│   └── package.json        # Node.js dependencies
└── README.md               # This file
```

## 🎨 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Interactive Navigation**: Smooth scrolling and active link highlighting
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Dynamic project cards with hover effects
- **Skills Display**: Animated skill tags
- **Hobbies Section**: Personal interests with icons
- **Social Links**: Ready for your social media profiles

## 🔧 API Endpoints

When running the full-stack version, these endpoints are available:

- `GET /api/health` - Health check
- `GET /api/personal-info` - Personal information
- `GET /api/projects` - List all projects
- `GET /api/projects/{id}` - Get specific project
- `GET /api/hobbies` - List hobbies
- `GET /api/skills` - List skills
- `POST /api/contact` - Submit contact form

## 🎯 Customization

### Update Personal Information
1. **For standalone version**: Edit `index.html`
2. **For full-stack version**: Edit `backend/app.py` (personal_info object)

### Add Your Projects
Update the `projects_data` array in `backend/app.py` or the HTML in `index.html`

### Update Contact Information
- Email: Change `hello@cyndie.dev` to your actual email
- Social links: Update the URLs in the social links section
- Location: Modify to reflect your actual location

### Add Your Photo
Replace the profile placeholder in the hero section with your actual photo

## 🚀 Deployment

### For Standalone Version
- Upload `index.html`, `styles.css`, `script.js` to any web hosting service
- No server required - works with any static hosting

### For Full-Stack Version
- **Backend**: Deploy to Heroku, Railway, or similar Python hosting
- **Frontend**: Deploy to Netlify, Vercel, or similar static hosting
- Update API URLs in frontend code to point to your deployed backend

## 🐛 Troubleshooting

### Common Issues

1. **Port 5000 already in use**
   - Kill the process using port 5000 or change the port in `app.py`

2. **npm install fails**
   - Make sure Node.js is properly installed
   - Try `npm cache clean --force`

3. **Python dependencies fail**
   - Make sure Python is in your PATH
   - Try `python -m pip install --upgrade pip`

4. **CORS errors in browser**
   - Make sure Flask-CORS is installed
   - Check that the backend is running on port 5000

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify that both servers are running on the correct ports
4. Check the network tab in browser dev tools for API calls

---

**Happy coding! 🎉**