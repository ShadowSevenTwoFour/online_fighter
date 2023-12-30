
import React, { useEffect, useState } from 'react';
import './App.css';
import backgroundImage from './images/night.png';
import { signInWithGoogle, signInAnon } from './firebase';

const App = () => {

  return (
    <div className= "background-container">
      <div className= "sliding-wrapper">
        <div className="sliding-background" style={{ backgroundImage: `url(${backgroundImage})` }}> </div>
      </div>
      <div className="title"><h1>Fighter Stars</h1></div>
      <button type="button" class="login-with-google-btn" onClick={signInWithGoogle}>Sign In with Google</button>
      <button type="button" class="login-anon" onClick={signInAnon}>Sign In Anonymously</button>
    </div>
  );
};

export default App;
