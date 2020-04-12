import React from 'react'
import IntroCard from '../components/IntroCard/IntroCard'
import '../styles/ResultsContainer.scss';

const ResultsContainer = () => {
  return (
    <section className='results-container'>
      <article className='results-header'>    
        <h2 className='results-title'>Results:</h2>
      </article>
      <section className='results-sect'>
        <IntroCard />
      </section>
    </section>
  )
}

export default ResultsContainer;