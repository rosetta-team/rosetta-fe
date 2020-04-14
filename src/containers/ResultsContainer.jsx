import React from 'react'
import IntroCard from '../components/IntroCard/IntroCard'
import '../styles/ResultsContainer.scss';
import { connect } from 'react-redux';
import SourceMethod from '../components/SourceMethod/SourceMethod';
import ResultCard from '../components/ResultCard/ResultCard.jsx'

const ResultsContainer = (props) => {
  let results = props.results.map(result => {
    return result.translations.map(res => <ResultCard rating={res.weightedRelevancyRating} method={res.method}/>)
  })

  return (
    <section className='results-container'>
      <section className='source-section'> 
        <article className='results-header'>
          <h2 className='results-title'>Results:</h2>
        </article>
          <section className='source-method-section'>
            <SourceMethod />
          </section>
      </section>
      <section className='results-sect'>
      {props.results?
        results:null
      }
      </section>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  results: state.results
})
export default connect(mapStateToProps)(ResultsContainer);
