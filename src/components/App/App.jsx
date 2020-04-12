import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import TranslationBlock from '../TranslationBlock/TranslationBlock';
import ResultsContainer from '../../containers/ResultsContainer';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import '../../styles/App.scss';

const client = new ApolloClient({
  uri: 'https://rosetta-server.herokuapp.com/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className='main-app'>
        <section className='main-top'>
          <Navbar />
          <TranslationBlock />
        </section>
        <section className='main-results'>
          <ResultsContainer />
        </section>
      </div>
    </ApolloProvider>
  )
}

export default App;
