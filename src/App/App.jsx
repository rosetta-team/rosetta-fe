import React,{ Component }from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import TranslationBlock from '../TranslationBlock/TranslationBlock';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import IntroCard from '../IntroCard/IntroCard'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state ={
      results: []
    }
  }

  render() {
    return (
      <div className='main-app'>
        <section className='main-top'>
          <Navbar />
          <TranslationBlock />
        </section>
        <section className='main-results'>
          {/* {this.state.results.length === 0 ? 
          <IntroCard /> : */}
          <ResultsContainer />
        {/* } */}
        </section>
      </div>
    )
  }
}

export default App;
