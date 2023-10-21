import React, { useState } from 'react';
import "./LogIn.scss";
import NavUserButton from '../buttons/NavBarButtons/NavUserButton';

const LogIn = ({}) => {

  const [hidePopup, setShowPopup] = useState(false);

  

  const closePopup = () => {
    setShowPopup(!hidePopup);
  };


  return (
    <div>
      {!hidePopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>Login</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;