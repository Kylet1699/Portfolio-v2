import React from 'react';

import './Projects.css';
import GradientBorderCard from '../ui/GradientBorderCard';

function Projects({ ...props }) {
  return (
    <div className="cards-container">
      <div className="cards">
        <GradientBorderCard />
        <GradientBorderCard />

        <GradientBorderCard />
      </div>
    </div>
  );
}

export default Projects;
