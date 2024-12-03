const Contact = require('../models/Contact');

// Get all contacts for the authenticated user
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ userId: req.session.userId });
        res.render('contacts', { contacts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving contacts');
    }
};

// Render the edit form for a specific contact
const renderEditForm = async (req, res) => {
    const contactId = req.params.id;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }
        res.render('editcontact', { contact });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving contact');
    }
};

// Update a specific contact
const updateContact = async (req, res) => {
    const contactId = req.params.id;
    const { name, phone, email } = req.body;
    try {
        const updatedContact = await Contact.findByIdAndUpdate(contactId, {
            name,
            phone,
            email,
        }, { new: true });

        if (!updatedContact) {
            return res.status(404).send('Contact not found');
        }

        res.redirect('/contacts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating contact');
    }
};

// Render the add contact form
const renderAddForm = (req, res) => {
    res.render('addcontact');
};

// Add a new contact
const addContact = async (req, res) => {
    const { name, phone, email } = req.body;
    const newContact = new Contact({ name, phone, email, userId: req.session.userId });

    try {
        await newContact.save();
        res.redirect('/contacts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error adding contact');
    }
};

// Delete a specific contact
const deleteContact = async (req, res) => {
    const contactId = req.params.id;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }

        await Contact.findByIdAndDelete(contactId);
        res.redirect('/contacts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting contact');
    }
};

// Get details of a specific contact (optional)
const getContactDetails = async (req, res) => {
    const contactId = req.params.id;
    try {
        const contact = await Contact.findById(contactId);
        if (!contact) {
            return res.status(404).send('Contact not found');
        }
        res.render('contactdetails', { contact });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving contact details');
    }
};

module.exports = {
    getContacts,
    renderEditForm,
    updateContact,
    renderAddForm,
    addContact,
    deleteContact,
    getContactDetails,
};
