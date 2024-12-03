
# Contact App

A simple web application built using Node.js, Express, MongoDB, and Handlebars. This app allows users to register, log in, and manage a list of contacts. Once logged in, users can view, add, edit, and delete contacts.

## Features
- User registration and login
- Secure password hashing
- Contact management (view, add, edit, delete)
- User authentication with session management
- Responsive design

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: A web application framework for Node.js.
- **MongoDB**: NoSQL database to store user and contact data.
- **Mongoose**: ODM for MongoDB, used for interacting with the database.
- **Handlebars**: Templating engine for dynamic content rendering.
- **Bcryptjs**: Used for securely hashing passwords before saving them in the database.
- **Session Management**: For tracking user authentication state.
- **CSS**: Inline styling for a simple, clean, and responsive layout.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Vivek-200554621/term-project.git
```

2. Navigate to the project directory:

```bash
cd contact-app
```

3. Install the dependencies:

```bash
npm install
```

4. Set up the environment variables. Create a `.env` file in the root of your project and add the following:

```
MONGO_URI=mongodb://localhost:27017/contactapp
SESSION_SECRET=your-session-secret
```

5. Start the application:

```bash
npm start
```

This will start the server, and you can access the app at [http://localhost:3000](http://localhost:3000).

## Usage

### Registration
- Go to the `/register` route to create a new user account by entering a username, email, and password.
  
### Login
- Once registered, you can log in at `/login` using your credentials.

### Contacts
- After logging in, you'll be redirected to the `/contacts` page, where you can view all your contacts.
- You can add new contacts, edit existing ones, and delete contacts.

### Logging out
- You can log out from the `/logout` route.

## Folder Structure

```
/contact-app
│
├── /controllers         # Contains controller logic for handling requests
│   └── authController.js
│   └── contactController.js
├── /models              # Contains Mongoose models
│   └── User.js
│   └── Contact.js
├── /routes              # Contains route definitions
│   └── authRoutes.js
│   └── contactRoutes.js
├── /views               # Contains Handlebars templates for rendering
│   └── login.hbs
│   └── register.hbs
│   └── contacts.hbs
│   └── addContact.hbs
│   └── editContact.hbs
│   └── layout.hbs
├── /public              # Contains static assets (CSS, images, etc.)
│   └── /stylesheets      # Contains CSS files
│       └── style.css
├── app.js               # Main Express application file
├── bin/                 # Contains the server start-up file
│   └── www
├── .env                 # Environment variables for MongoDB and session secret
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Contributing

Feel free to fork the repository, submit issues, and create pull requests. If you have any improvements or suggestions, they are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Note:** Make sure to update the repository links, file paths, and any specific details in the `README.md` according to your actual project setup.
