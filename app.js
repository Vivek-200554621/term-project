require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes'); // Import authentication routes


const app = express();

// Set view engine to Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Use routes
app.use('/', contactRoutes);
// Middleware to check authentication
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
      next(); // User is authenticated, proceed to the next middleware or route
  } else {
      res.redirect('/login'); // Redirect to login if not authenticated
  }
}
app.get('/', (req, res) => {
  if (req.session.userId) {
      res.redirect('/contacts'); // Redirect to contacts page if logged in
  } else {
      res.redirect('/login'); // Redirect to login page if not logged in
  }
});
app.use('/', authRoutes); // Authentication routes (login, register, logout)
app.use('/contacts', contactRoutes); // Contact management routes


module.exports = app;
