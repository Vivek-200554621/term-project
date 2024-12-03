const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Protect routes with the authentication middleware
router.get('/contacts', isAuthenticated, async (req, res) => {
    try {
        const contacts = await Contact.find({ userId: req.session.userId }); // Ensure contacts are tied to logged-in user
        res.render('contacts', { contacts });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).send('An error occurred while fetching contacts');
    }
});

// Route to display the list of contacts (only for authenticated users)
router.get('/contacts', isAuthenticated, contactController.getContacts);

// Route to display the edit form for a specific contact
router.get('/edit/:id', isAuthenticated, contactController.renderEditForm);

// Route to handle the form submission (POST) for updating the contact
router.post('/edit/:id', isAuthenticated, contactController.updateContact);

// Route to handle adding a new contact
router.get('/add', isAuthenticated, contactController.renderAddForm);

// Route to handle the form submission (POST) for adding a new contact
router.post('/add', isAuthenticated, contactController.addContact);

// Route to delete a contact
router.get('/delete/:id', isAuthenticated, contactController.deleteContact);

// Route to show individual contact details (optional)
router.get('/contact/:id', isAuthenticated, contactController.getContactDetails);

module.exports = router;
