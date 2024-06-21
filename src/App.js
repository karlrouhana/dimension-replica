import React from 'react';
import Stars from './Assets/stars.png';
import BehindStars from './Assets/behind-stars.png';
import './App.scss';

const App = () => {
  return (
    <div className="full-background">
      <div className="text">
        <h1>Dimension is the new
          <span>standard for collaboration</span>
        </h1>
      </div>
      <div className="behind-stars">
        <div className="stars">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="circles">
        <div className="circle-1">
          <div className="background"></div>
        </div>
        <div className="circle-2">
          <div className="background"></div>
          <div className="spinner inner-reversed"></div>
        </div>
        <div className="circle-3">
          <div className="background"></div>
          <div className="spinner inner"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
