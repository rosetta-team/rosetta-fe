import React, { Component } from 'react';
import IntroCard from '../components/IntroCard/IntroCard'
import '../styles/ResultsContainer.scss';
import { connect } from 'react-redux';
import SourceMethod from '../components/SourceMethod/SourceMethod';
import ResultCard from '../components/ResultCard/ResultCard.jsx'
import { CREATE_VOTE } from '../queries'
import { withApollo } from '@apollo/react-hoc'
import { useMutation } from '@apollo/react-hooks';
import { setResults } from '../actions'
import '../styles/prism.css'

export class ResultsContainer extends Component {
  constructor(props) {
    super();
  }

  handleVote = async (resultId, event, type) => {
    this.setState({error: ''});
    const newResult = Number(resultId);
    const { data, loading, error } = await this.props.client.mutate({ mutation: CREATE_VOTE, variables: { methodResultId: newResult, type: type}})
    console.log('data is:', data)
    this.props.setResults(data.createVote);
  }

  render() {
    const results = this.props.results.map(res => <ResultCard
                                                   rating={res.weightedRelevancyRating}
                                                   method={res.method}
                                                   resultId={res.id}
                                                   handleVote={this.handleVote}/>);

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

export const mapDispatchToProps = dispatch => ({
  setResults: results => dispatch(setResults(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(withApollo(ResultsContainer));
