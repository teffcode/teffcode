import React from 'react';

import '../styles/Card.css';

const Card = ({ img, link, text }) => (
  <div className="card">
    <img className="card__img"src={img} alt="img-card" />
    <div className="card__text">
      <a href={link}>
        <i class="fas fa-link"></i>
      </a>
      <code>{text}</code>
    </div>
  </div>
);

export default Card;