import React from 'react'
import IntroCard from '../IntroCard/IntroCard'
import './ResultsContainer.scss';

const ResultsContainer = () => {
  return (
    <section className='results-container'>
      <article className='results-header'>    
        <h2 className='results-title'>Results:</h2>
      </article>
      <section className='results-sect'>
        <IntroCard />
        {/* <IntroCard />
        <IntroCard />
        <IntroCard />
        <IntroCard /> */}
      </section>
    </section>
  )
}

export default ResultsContainer;