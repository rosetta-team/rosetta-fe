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

  if(!props.results.length) {
    return(
      <section className='results-container'>
        <IntroCard />
      </section>
    )
  } else {
      return (
        <section className='results-container'>
        <section className='source-section'> 
          <article className='results-header'>
            <h2 className='results-title'>Selected Method: </h2>
          </article>
            <section className='source-method-section'>
              {props.results !== [] ? <SourceMethod /> : null}
            </section>
        </section>
        <section className='results-wrapper'>
          <div className='results-div'>
            <h2 className='results-label'>Results:</h2>
          </div>
          <section className='results-sect'>
          {props.results ? results : null}
          </section>
        </section>
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  results: state.results
})
export default connect(mapStateToProps)(ResultsContainer);
