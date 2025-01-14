Weather-Based Travel Planner Backend

Overview

This backend provides user authentication (register/login) and allows users to save their favorite destinations. It connects to MongoDB for data persistence and uses JWT for secure authentication.

Features
-User registration
-User login with JWT authentication
-Add favorites (destinations)
-Fetch saved favorites

Technologies Used
Node.js with Express.js
MongoDB (via Mongoose)
JWT Authentication
dotenv for environment variables

Getting Started
Follow these steps to set up and run the backend locally:

Prerequisites
Node.js (version 12 or higher)
MongoDB: You can use MongoDB Atlas for cloud database or install MongoDB locally.
Postman or another API testing tool to test the endpoints.

Step 1: Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/YourUsername/Weather-Based-Travel-Planner.git

cd Weather-Based-Travel-Planner

Step 2: Install Dependencies
Install the required dependencies using npm:

npm install

Step 3: Set Up the Environment Variables

Create a .env file at the root of the project directory with the following contents:

env

MONGO_URI=mongodb://<your-username>:<your-password>@cluster0.mongodb.net/<your-db-name>?retryWrites=true&w=majority

JWT_SECRET=your_jwt_secret

Replace <your-username>, <your-password>, and <your-db-name> with your MongoDB credentials (use MongoDB Atlas if you want a cloud database).

Set your own JWT_SECRET value. This secret will be used to sign your JWT tokens.

Step 4: Start the Server

Run the backend server:

npm start

This will start the server on http://localhost:5000. The server will automatically connect to MongoDB.

API Endpoints

1. Register User
   POST /api/auth/register

Request Body:

code example:
{
"name": "testuser",
"email": "testuser@example.com",
"password": "securepassword"
}

Response:
example outcome

{"id":"678627ea0fdb75ef78d82d09",
"name":"testuser",
"email":"testuser@example.com","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODYyN2VhMGZkYjc1ZWY3OGQ4MmQwOSIsImlhdCI6MTczNjg0NTI5MCwiZXhwIjoxNzM3NDUwMDkwfQ.NwnCFMCBouhuurOtTHmpYwL8ON17h482iOwpKdYqU2M"}

201 Created: User is successfully registered.
400 Bad Request: If the data is invalid or email is already taken.

2. Login User
   POST /api/auth/login

Request Body:
{
"email": "testuser@example.com",
"password": "securepassword"
}

Response:
200 OK: Successful login, returns the JWT token.
400 Bad Request: Invalid credentials.

Example Response:
json
Copy code
{
"token": "your_jwt_token"
}

4. Add Favorite Destination
   POST /api/favorites

Request Body:

{
"destination": "Paris, France",
"activity": "Sightseeing",
"weather_conditions": "Sunny"
}

Response:
200 OK: Favorite added successfully.
400 Bad Request: If the data is invalid or missing required fields.

5. Get Favorite Destinations
   GET /api/favorites

Authorization: Bearer token (JWT token from the login step)

Response:
200 OK: Returns a list of saved favorite destinations.
Testing the Backend with Postman

Step 1: Testing User Registration
Open Postman.
Set the request type to POST.
Enter the URL: http://localhost:5000/api/auth/register.
In the Body section, select raw and set the format to JSON.
Add the following JSON to the body (replace the values as needed):

{
"name": "testuser",
"email": "testuser@example.com",
"password": "securepassword"
}
Click Send to register the user.

Step 2: Testing User Login
Set the request type to POST.
Enter the URL: http://localhost:5000/api/auth/login.
In the Body section, select raw and set the format to JSON.
Add the following JSON to the body:

{
"email": "testuser@example.com",
"password": "securepassword"
}

Click Send to get the login response. Copy the JWT token from the response.

Step 3: Testing Add Favorite Destination
Set the request type to POST.

Enter the URL: http://localhost:5000/api/favorites/.
In the Authorization tab, set the type to Bearer Token and paste the JWT token in the token field.
In the Body section, select raw and set the format to JSON.
Add the following JSON to the body:

{
"destination": "Paris, France",
"activity": "Sightseeing",
"weather_conditions": "Sunny"
}

Click Send to add the favorite.

Step 4: Testing Get Favorite Destinations
Set the request type to GET.
Enter the URL: http://localhost:5000/api/users/favorites.

In the Authorization tab, set the type to Bearer Token and paste the JWT token in the token field.

Click Send to retrieve the saved favorite destinations.

Troubleshooting

Error: MongooseError: URI must be a string
This typically occurs when the MONGO_URI in the .env file is not set correctly. Double-check that the MongoDB URI is valid and properly configured.

Error: jwt malformed
This error occurs when the JWT token is not provided or is malformed. Ensure you are using a valid token from the login response.

Deployment
To deploy the backend to a platform like Heroku or Render:

Create an account on Heroku or Render.
Initialize a git repository (git init), commit your changes, and push to Heroku or Render following their instructions.
Contributing

Feel free to fork this project and submit issues and pull requests. If you'd like to contribute, please follow the standard GitHub flow:

Fork the repository.
Create a new branch.
Make your changes.
Commit and push your changes.
Open a pull request.
