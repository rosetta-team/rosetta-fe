import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import TranslationBlock from '../TranslationBlock/TranslationBlock';
import ResultsContainer from '../../containers/ResultsContainer';
import '../../styles/App.scss';

const App = () => {
  return (
    <div className='main-app'>
      <section className='main-top'>
        <Navbar />
        <TranslationBlock />
      </section>
      <section className='main-results'>
        <ResultsContainer />
      </section>
    </div>
  )
}

export default App;