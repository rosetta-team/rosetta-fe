import React from 'react';
import SourceBlock, { mapStateToProps} from './SourceBlock';
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';

describe('SourceBlock component', () => {
  it('can render', () => {
    const client = new ApolloClient({ uri: 'fake.com' });
    const store = createStore(rootReducer);
    const mockMethods = [{ name: 'map', id: 1}, { name: 'push', id: 2}]

    const { getByText } = render(<ApolloProvider client={client}>
                                  <Provider store={store}>
                                    <SourceBlock
                                      methods={mockMethods}
                                    />
                                  </Provider>
                                 </ApolloProvider>
                                );
    expect(getByText('Select a method:')).toBeInTheDocument();
  })
})

describe('mapStateToProps', () => {
  it('should return sourceLanguage, targetLangauge, and sourceMethod', () => {
    const mockState = {
      sourceLanguage: {name:'Ruby', id:1},
      targetLanguage: {name: 'JavaScript', id:2},
      sourceMethod: {
        "id": "112",
        "name": "Array.prototype.concat()",
        description: 'thing',
        syntax: 'another thing',
        docsUrl: 'place.com',
        snippet: 'bad test data'
      },
      results: []
    }
    const expected = {
      sourceLanguage: {name:'Ruby', id:1},
      targetLanguage: {name: 'JavaScript', id:2},
      sourceMethod: {
        "id": "112",
        "name": "Array.prototype.concat()",
        description: 'thing',
        syntax: 'another thing',
        docsUrl: 'place.com',
        snippet: 'bad test data'
      }
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})