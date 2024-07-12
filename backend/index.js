require('dotenv').config()

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();
const port = process.env.PORT || 5000;

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

app.use(cors());
app.use(bodyParser.json());

app.use('/contact', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});