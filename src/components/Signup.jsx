import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [alreadySignedUp, setAlreadySignedUp] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
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
    <div className="signup-section px-4 bg-[#FFF7EF]">
      <h1 className="text-2xl sm:text-4xl font-bold text-orange-500 text-center font-coiny mb-8 sm:mb-14">
        Sign Up For KayToons for Free
      </h1>
      <p className="text-base sm:text-lg font-medium text-gray-800 sm:px-[30rem] mb-8 sm:mb-12 text-center">
        KayToons offers a unique and fun way for kids to reduce screen time
        while engaging with friendly and educational audiobooks. Our content is
        designed to entertain and educate, providing a screen-free alternative
        that children and parents will love. Sign Up with your email to get
        notified when we launch!
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center pt-10 sm:pt-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-2 min-w-[250px] sm:min-w-[300px] max-w-[400px] px-4 py-2 mb-2 sm:mb-0 text-base shadow-lg rounded-lg border-0 font-coiny"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-orange-500 text-white px-6 py-2 text-lg cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-orange-400 hover:scale-110 active:scale-110 rounded-lg sm:ml-8 h-[47px] font-coiny"
          onClick={signupUser}
        >
          Sign Up
        </button>
      </div>
      {error && <p className="text-red-500 text-lg mt-2">{error}</p>}
      {alreadySignedUp && (
        <p className="text-red-500 text-lg mt-2">Already signed up</p>
      )}
      {success && (
        <p className="text-green-500 text-lg mt-2">Successfully signed up!</p>
      )}
    </div>
  );
}

export default SignUp;

