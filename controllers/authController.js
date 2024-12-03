const User = require('../models/User'); // Ensure you have a User model
const bcrypt = require('bcryptjs');
const registerUser = async (req, res) => {
    const { username, email, password } = req.body; // Include email field

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword, // Store the hashed password
        });

        await newUser.save();

        // Redirect to login page after successful registration
        res.redirect('/login');
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('An error occurred during registration.');
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        // Verify password
        if (user.password !== password) {
            return res.status(400).send('Invalid email or password');
        }

        // Set session
        req.session.userId = user._id;

        // Redirect to contacts page
        res.redirect('/contacts');
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('An error occurred during login.');
    }
};



module.exports = {
    renderLoginPage: (req, res) => res.render('login'),
    renderRegisterPage: (req, res) => res.render('register'),
    registerUser,
    loginUser,
    logoutUser: (req, res) => {
        req.session.destroy(() => {
            res.redirect('/login');
        });
    },
};

