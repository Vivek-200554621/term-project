// middleware/authMiddleware.js

function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next(); // User is logged in, proceed with the request
    }
    res.redirect('/login'); // User is not logged in, redirect to login page
}

module.exports = { isAuthenticated };
