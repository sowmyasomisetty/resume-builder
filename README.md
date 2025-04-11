Resume Builder App

    A professional resume builder web application built with **React**, **Bootstrap**, and **Vite**. Users can fill in personal and professional details, choose from multiple resume templates, and preview or download their resume.

✨ Features

    - User registration and login (basic navigation only).
    - Fill out resume form including:
    - Personal Info
    - Education, Experience, Projects, Skills, Hobbies
    - Dynamic addition/removal of multiple entries.
    - Choose from multiple resume templates.
    - Theme customization (font, color).
    - Live preview of the resume.
    - Responsive design with Bootstrap.
    - Background images and styled pages.


📁 Project Structure

    Resume Builder Project/
    │
    ├── dist/                         # Production build output (auto-generated)
    ├── node_modules/                # Installed npm packages
    ├── public/
    │   └── index.html               # HTML entry point
    │
    ├── src/                         # Main application source code
    │
    │   ├── assets/                  # Static assets like images
    │   │   ├── contact.jpg
    │   │   ├── resume.jpg
    │   │   └── react.svg
    │
    │   ├── components/              # Reusable React components
    │   │   ├── Navbar.jsx
    │   │   ├── ResumeBuilder.jsx
    │   │   ├── ResumeForm.jsx
    │   │   ├── ResumePreview.jsx
    │   │   ├── TemplateCard.jsx
    │   │   ├── TemplateSelector.jsx
    │   │   └── ThemeCustomizer.jsx
    │
    │   ├── context1/                # Global state using Context API
    │   │   └── ResumeContext1.jsx
    │
    │   ├── pages/                   # Page components for routing
    │   │   ├── AboutUs.jsx
    │   │   ├── ContactUs.jsx
    │   │   ├── FormPage.jsx
    │   │   ├── Home.jsx
    │   │   ├── Register.jsx
    │   │   ├── SignIn.jsx
    │   │   └── TemplateSelectionPage.jsx
    │
    │   ├── templates/               # Resume templates
    │   │   ├── TemplateOne.jsx
    │   │   ├── TemplateTwo.jsx
    │   │   └── TemplateThree.jsx
    │
    │   ├── App.jsx                  # App entry with all routes
    │   ├── main.jsx                 # App bootstrap
    │   └── index.css                # Global CSS styles
    │
    ├── .gitignore                   # Git ignore rules
    ├── eslint.config.js            # ESLint config
    ├── package.json                # Project metadata & dependencies
    ├── package-lock.json           # Exact dependency versions
    ├── README.md                   # Project overview (you can use the one I sent!)
    └── vite.config.js              # Vite config

🛠️ Tech Stack
    React
    Vite
    React Router
    Bootstrap 5
    Context API
