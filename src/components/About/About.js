import React from 'react';
import './About.css';

function About({ ...props }) {
  return (
    <div className="about-container text-left max-w-3xl m-auto pt-20 flex flex-col gap-2">
      <div className="text-4xl font-medium">hi i'm kyle 😎</div>
      <div className="text-4xl font-medium">
        full stack developer based in <span className="text-lightOrange">vancouver</span>
      </div>
      <div className="text-xl text-body flex flex-row items-center gap-1.5">
        <div className="circle"></div>
        open to work
      </div>
    </div>
  );
}

export default About;
