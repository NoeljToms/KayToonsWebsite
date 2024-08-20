import React from "react";
import "./tailwind.css";
import Header from "./components/Header";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="text-center bg-[#FFF7EF] min-h-screen">
      <Header />
      <div className="pt-[15vh] sm:pt-[15vh]" id="signup">
        <SignUp />
      </div>
    </div>
  );
}

export default App;

