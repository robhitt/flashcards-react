import React from 'react';
import Card from '../Card/Card'

import './styles.css';

const CardSet = (props) => {

  const handleCardQuestion = (cardData, index) => {
    return <Card key={`card-${index}`} cardData={cardData} />
  };

  return (
    <div className='card-set'>
      {
        props.courseData && props.courseData.map(handleCardQuestion)
      }
    </div>
  )
}

export default CardSet;