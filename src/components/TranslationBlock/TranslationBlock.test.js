import React from 'react';
import TranslationBlock from './TranslationBlock';
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/react-testing';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import wait from 'waait';
import { GET_ALL_LANGUAGES } from '../../queries'

describe('TranslationBlock component', () => {
  it('can render', async () => {
    const store = createStore(rootReducer);
    const mockData = {
                        allLanguages: [
                          {
                            "id": "1",
                            "name": "Ruby",
                            "methods": [
                              {
                                "id": "1",
                                "name": "Array::[]",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "2",
                                "name": "Array::new",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "3",
                                "name": "Array::try_convert",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "4",
                                "name": "Array#&",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "5",
                                "name": "Array#*",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              }
                            ]
                          },
                          {
                            "id": "2",
                            "name": "JavaScript",
                            "methods": [
                              {
                                "id": "109",
                                "name": "Array.from()",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "110",
                                "name": "Array.isArray()",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "111",
                                "name": "Array.of()",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              },
                              {
                                "id": "112",
                                "name": "Array.prototype.concat()",
                                description: 'thing',
                                syntax: 'another thing',
                                docsUrl: 'place.com',
                                snippet: 'bad test data'
                              }
                            ]
                          }
                        ]
                      };

    const mocks = {
        request: {
          query: GET_ALL_LANGUAGES
        },
        result: {
          data: mockData
        }
      };

    const { getByText } = render(<MockedProvider mocks={[mocks]} addTypename={false}>
                                <Provider store={store}>
                                  <TranslationBlock />
                                </ Provider>
                               </ MockedProvider>
                              );
    await wait(0);

    expect(getByText('Translate from:')).toBeInTheDocument();
  })
})
