import React from 'react';

import './Projects.css';
import Card from '../ui/Card';

// cover image
import InsightTubeCover from './InsightTube/cover.png';
import WinnableCover from './Winnable/cover.png';

function Projects({ ...props }) {
  return (
    <div className="cards-container">
      <Card
        title="InsightTube"
        description="Full-Stack Development"
        coverImage={InsightTubeCover}
        coverImagePosition="top"
      />
      <Card
        title="Winnable"
        description="Full-Stack Development"
        coverImage={WinnableCover}
        coverImagePosition="center"
      />
    </div>
  );
}

export default Projects;
