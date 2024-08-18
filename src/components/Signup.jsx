import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import "./Signup.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Simple email regex pattern for validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const signupUser = async () => {
    setAlreadySignedUp(false);
    setSuccess(false);
    setError("");

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const userRef = collection(db, "signupUsers");

    const querySnapshot = await getDocs(userRef);
    let isAlreadySignedUp = false;

    querySnapshot.forEach((doc) => {
      if (doc.data().email === email) {
        isAlreadySignedUp = true;
        setAlreadySignedUp(true);
      }
    });

    if (isAlreadySignedUp) return;

    await addDoc(userRef, { email: email });
    setSuccess(true);
    setEmail("");
  };

  return (
    <div className="signup-section">
      <h1 className="header-sign">Sign Up For Kaytoons for Free</h1>
      <p className="description">
        Kaytoons offers a unique and fun way for kids to reduce screen time
        while engaging with friendly and educational audiobooks. Our content is
        designed to entertain and educate, providing a screen-free alternative
        that children and parents will love. Sign Up with your email to get
        notified when we launch!
      </p>
      <div className="combine-div">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn-sign" onClick={signupUser}>
          Sign Up
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {alreadySignedUp && (
        <p className="already-signed-up">Already signed up</p>
      )}
      {success && <p className="success-message">Successfully signed up!</p>}
    </div>
  );
}

export default SignUp;

