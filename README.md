Backend Stage Zero Task — Profile API

📋 Description

This project is a simple RESTful API that uses a single endpoint /me that returns:

My profile information

A dynamic random cat fact fetched from the Cat Facts API

🚀 Setup Instructions
  1. Clone this repository
     git clone https://github.com/<your-username>/backend-wizards-stage0-profile-api.git
     cd backend-wizards-stage0-profile-api

  2. Initialize Node.js

  If your project doesn’t have a package.json yet, initialize one:

  npm init -y
  3. Run the server locally
     node index.js
  
  4. Access your API
  
     Go to: http://localhost:8000/me
  
    Expected JSON response:
    
    {
      "status": "success",
      "user": {
        "email": "asukuhamza1@gmail.com",
        "name": "Asuku Hamza",
        "stack": "MERN"
      },
      "timestamp": "2025-10-18T14:48:12.001Z",
      "fact": "Cats have five toes on their front paws, but only four on the back ones."
    }
