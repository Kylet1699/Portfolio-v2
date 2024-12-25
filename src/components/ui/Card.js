import React from 'react';

import './Card.css';

/**
 * Card component with glass effect and image
 * @param {Object} props
 * @param {string} props.title - Title of the card
 * @param {string} props.description - Description text
 * @param {string} props.coverImage - URL/path to cover image
 * @param {string} props.coverImagePosition - CSS object-position value
 * @returns {JSX.Element} Card with glass cover and background
 */
function Card({ ...props }) {
  return (
    <div className="card">
      <div className="glass-cover">
        <p className="text-2xl font-medium">{props.title}</p>
        <p className="text-lg">{props.description}</p>
      </div>
      <img src={props.coverImage} style={{ objectPosition: `${props.coverImagePosition}` }} />
    </div>
  );
}

export default Card;
