import React from 'react';
import './MainPage.css';
import exampleImage from './kaytoon-sample.jpg'; // Adjust the path to your image
import { Link } from 'react-scroll';


const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content-container">
      <h1 className="title">Kaytoons</h1>

        <div className="left-side">
          <p className="subtitle">Fun and educational entertainment that is screen-free and good for children.</p>
          <Link to="signup" smooth={true} duration={500}>
            <button className="btn-signup">Sign Up</button>
          </Link>
          {/* <div className="combine-div">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn-sign">Get Free Access</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
