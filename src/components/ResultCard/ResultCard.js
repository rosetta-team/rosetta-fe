import React from 'react';

const ResultCard = ({rating, method}) => {
  let {name, id, description, snippet, syntax}=method
  return (
    <div className='result-div' key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{syntax}</p>
      <p>{snippet}</p>
      <p>{rating}</p>
    </div>
  )
}

export default ResultCard;
