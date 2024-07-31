require('dotenv').config(); //Load environment variables from a .env file

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

// Logs the email user and password to the console for debugging purposes
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// Applies CORS middleware to allow cross-origin requests from any domain
app.use(cors());

// Applies middleware to parse incoming JSON requests and make the data accessible in req.body
app.use(bodyParser.json());

// Mounts the contactRoutes at the /contact path, directing requests to those routes
app.use('/contact', contactRoutes);

// Starts the server, listening on the specified port, and logs a message to the console
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});