import React from 'react';

import './Experience.css';

function Experience({ ...props }) {
  return (
    <div className="experience-container">
      <p className="date">2022 - 2024</p>
      <div className="description">
        <h2>Full-Stack Developer @ Switchboard</h2>
        <p>Burnaby, BC, CA</p>
      </div>
    </div>
  );
}

export default Experience;
