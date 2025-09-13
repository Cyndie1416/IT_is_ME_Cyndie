@echo off
echo Starting Cyndie's Portfolio Development Environment...
echo.

echo Starting Python Flask Backend...
start "Flask Backend" cmd /k "cd backend && python -m pip install -r requirements.txt && python app.py"

echo Waiting 3 seconds for backend to start...
timeout /t 3 /nobreak > nul

echo Starting React Frontend...
start "React Frontend" cmd /k "cd frontend && npm install && npm start"

echo.
echo Both servers are starting up!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Press any key to exit...
pause > nul
