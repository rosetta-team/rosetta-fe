import React from 'react';
import App from './App';
import { render } from '@testing-library/react'

import { createStore } from 'redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

describe('App component', () => {
  it('can render', () => {
    const client = new ApolloClient({ uri: 'fake.com' });
    const store = createStore(rootReducer);
    const { getByText } = render(<ApolloProvider client={client}><Provider store={store}><App /></Provider></ApolloProvider>);
    // const { getByText } = render(<App />);
    // expect(getByText(mockMethod.name)).toBeInTheDocument();
    // expect(true).toEqual(true);
  })
})
