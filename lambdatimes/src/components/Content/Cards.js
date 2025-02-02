import React from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) =>
        <Card
          key={index}
          card={card}
        />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props
// Added already in Card.js

export default Cards;