# KayToons Sign-Up Application

Welcome to the **KayToons Sign-Up Application**! This project is a simple React-based application that allows users to sign up for notifications about the launch of KayToons. The app features a responsive design, ensuring it works well on both desktop and mobile devices.

## Table of Contents

- [KayToons Sign-Up Application](#kaytoons-sign-up-application)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Firebase Delpoyment](#firebase-delpoyment)

## Features

- **Responsive Design**: Works seamlessly across different screen sizes.
- **Firebase Integration**: Sign-up emails are stored in a Firestore database.
- **Email Validation**: Ensures users enter a valid email address.
- **Feedback Messages**: Provides success and error messages based on user actions.

## Technologies Used

- **React**: Frontend library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Firebase Firestore**: Database to store user emails.
- **JavaScript (ES6)**: Language used for the logic and interactivity.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/kaytoons-signup.git
   cd kaytoons-signup

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Firebase**:
   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable the Firestore service.
   - Copy the Firebase configuration object from the Firebase Console and paste it into the `firebaseConfig.js` file.

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID",
      measurementId: "YOUR_MEASUREMENT_ID",
    };
    ```

4. **Start the development server**:

   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Usage

- **Sign Up**: Enter your email in the sign-up form and click "Sign Up". You will receive feedback if the email is already signed up or if the sign-up is successful.
- **Responsive Design**: Test the application on different devices or screen sizes to see the responsive design in action.

## Project Structure

```
kaytoons-signup/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   └── KayKoo1x.png
│   ├── components/
│   │   ├── Header.js
│   │   └── SignUp.js
│   ├── firebaseConfig.js
│   ├── App.js
│   ├── index.js
│   ├── tailwind.css
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **assets/**: Contains images and other static assets.
- **components/**: Contains React components like Header and SignUp.
- **firebaseConfig.js**: Firebase configuration file.
- **App.js**: Main application component.
- **tailwind.css**: Custom Tailwind CSS configuration.

## Firebase Delpoyment

To deploy the application to Firebase, follow these steps:

1. **Install the Firebase CLI**:

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:

   ```bash
   firebase login
   ```

3. **Deploy the application**:

   ```bash
   firebase init
   ```

   - Follow the prompts to select the project you want to deploy to.
   - Select "Hosting" as the Firebase project type.
   - Choose build folder as the public directory.
   - Choose No for "Configure as a single-page app (rewrite all urls to /index.html)" as the Hosting configuration.
   - Run npm build to build the application.
   - Deploy the application to Firebase Hosting. Using the command:

   ```bash
   firebase deploy
   ```

The application will be deployed to Firebase Hosting and available at the URL provided by Firebase.
