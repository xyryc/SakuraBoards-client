# SakuraBoards

**Live URL**: [sakuraboards.web.app](https://sakuraboards.web.app/)

HyperLoadout is a feature-rich web application designed for managing and showcasing eSports equipment. It includes user authentication, a fully functional CRUD system, and sorting capabilities, all powered by modern web technologies.

## Key Features

- **Authentication with Firebase**:
  - Login and Registration method for secure access.
- **CRUD Operations**:

  - Powered by MongoDB Atlas, users can add, update, delete, and view equipment details.

- **Search Functionality**:

  - Users can search a product by product name, implemented using MongoDB queries.

- **Private Routes**:

  - Restricted access to specific pages and functionalities. Users must log in to perform actions like adding, updating, or deleting products.

- **User-Specific Permissions**:

  - Users can only edit or delete products that were created with their account/email.

- **Users Dashboard**:
  - Registered/logged-in users can view information such as account creation time, last login time, and other details about their accounts, retrieved using MongoDB.

## Technology Stack

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: Firebase Authentication
- **Hosting**: Firebase Hosting
- **Routing**: React Router DOM
