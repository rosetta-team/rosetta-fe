import React from 'react';
import '../../styles/ResultCard.scss'
import Snippet from '../Snippet/Snippet'

export const ResultCard = ({rating, method, resultId, handleVote}) => {
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
          <span>Snippet:</span>
            <section className='code-wrapper'>
               <Snippet
                code={snippet}
                language="js"
                plugins={["line-numbers"]}
              />
            </section>
        </div>
      </section>
      <section className='user-vote-section'>
        <button className='vote-btn' onClick={(event) =>
        handleVote(resultId, event, 'down')}>
          This wasn't helpful
          <span className='down-vote'></span>
        </button>
        <button className='vote-btn' onClick={(event) =>
        handleVote(resultId, event, 'up')}>
          This was helpful
          <span className='up-vote'></span>
        </button>
      </section>
    </div>
  )
}

export default ResultCard;
