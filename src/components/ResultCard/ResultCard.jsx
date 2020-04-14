import React from 'react';
import '../../styles/ResultCard.scss'

const ResultCard = ({rating, method}) => {
  let {name, id, description, snippet, syntax}=method
  let rate = (rating.toFixed(2))* 100
  return (
    <div className='result-div' key={id}>
      <section className='top-section'>
        <div className='top-div-name'>
          <h3>{name}</h3>
        </div>
        <div className='top-div-rate'>
          <p><span>Relevancy:</span>{rate}%</p>
        </div>
      </section>
      <section className='mid-section'>
        <div className='mid-div-description'>
          <p><span>Description:</span> {description}</p>
        </div>
        <div className='mid-div-syntax'>
          <p><span>Syntax:</span> {syntax}</p>
        </div>
      </section>
      <section className='bottom-section'>
        <div className='bottom-div-snippet'>
          <p><span>Snippet:</span>{snippet}</p>
        </div>
      </section>
    </div>
  )
}

export default ResultCard;
