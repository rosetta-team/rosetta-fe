import React, { Component } from 'react';
import IntroCard from '../components/IntroCard/IntroCard'
import '../styles/ResultsContainer.scss';
import { connect } from 'react-redux';
import SourceMethod from '../components/SourceMethod/SourceMethod';
import ResultCard from '../components/ResultCard/ResultCard.jsx'
import { CREATE_VOTE } from '../queries'


class ResultsContainer extends Component {
  constructor(props) {
    super();
  }

  handleUpvote = (resultId) => {
    debugger
    // send graph QL query to mutation
    // include: methodResultId (get it out of the results card)
    // save return of graphQL query in variable
    // update redux store w/ the results
    // rerender the component
  }
  render() {
    const results = this.props.results.map(result => {
      return result.translations.map(res => <ResultCard rating={res.weightedRelevancyRating} method={res.method} resultId={res.id} handleUpvote={this.handleUpvote}/>)
    })

    if(!this.props.results.length) {
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
                {this.props.results !== [] ? <SourceMethod /> : null}
              </section>
          </section>
          <section className='results-wrapper'>
            <div className='results-div'>
              <h2 className='results-label'>Results:</h2>
            </div>
            <section className='results-sect'>
            {this.props.results ? results : null}
            </section>
          </section>
        </section>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  results: state.results
})
export default connect(mapStateToProps)(ResultsContainer);
