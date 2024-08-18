import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <div className="main-content">
        <MainPage />
      </div> */}
      <div className="SignUp-content" id="signup">
        <SignUp />
      </div>
    </div>
  );
}

export default App;

