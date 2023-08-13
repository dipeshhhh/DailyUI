import React from 'react';
import './NavigationCard.css';
import { NavLink } from 'react-router-dom';

function NavigationCard({ title, pageLink, image }) {
  return (
    <NavLink className='navigation-card' to={pageLink}>
      <img src={image} />
      <h2>{title}</h2>
    </NavLink>
  )
}

export default NavigationCard;