import React from 'react';

import './Projects.css';
import Card from '../ui/Card';

// cover image
import InsightTubeCover from './InsightTube/cover.png';
import WinnableCover from './Winnable/cover.png';
import IcyVillageCover from './IcyVillage/cover.png';
import FreshPotatoesCover from './FreshPotatoes/cover.png';

function Projects({ ...props }) {
  return (
    <div className="cards-container">
      <Card
        title="Winnable"
        description="Full-Stack Development"
        coverImage={WinnableCover}
        coverImagePosition="center"
      />
      <Card
        title="InsightTube"
        description="Full-Stack Development"
        coverImage={InsightTubeCover}
        coverImagePosition="top"
      />
      <Card
        title="Icy Village"
        description="Front-End Design & Development"
        coverImage={IcyVillageCover}
        coverImagePosition="center"
      />
      <Card
        title="Fresh Potatoes"
        description="Full-Stack Development"
        coverImage={FreshPotatoesCover}
        coverImagePosition="top"
      />
    </div>
  );
}

export default Projects;
