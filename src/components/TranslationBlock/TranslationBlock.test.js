import React from 'react';
import {TranslationBlock, mapStateToProps, mapDispatchToProps} from './TranslationBlock';
import { render } from '@testing-library/react'
import { createStore } from 'redux';
import { MockedProvider } from '@apollo/react-testing';
import { Provider } from 'react-redux';
import { rootReducer } from '../../reducers';
import wait from 'waait';
import { GET_ALL_LANGUAGES } from '../../queries';
import {
  setSourceLanguage,
  setSourceMethod,
  setTargetLanguage,
  setSourceId,
  setTargetId,
  setResults,
  resetSourceMethod,
  resetResults
} from '../../actions/index';

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

describe('mapDispatchToProps', () => {
  it('should call dispatch with setSourceLanguage', () => {
    const mockDispatch = jest.fn();
    const language = {
      name: 'Ruby', 
      id: 1
    }
    const actionToDispatch = setSourceLanguage(language)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setSourceLanguage(language)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with setTargetLanguage', () => {
    const mockDispatch = jest.fn();
    const language = {
      name: 'Ruby',
      id: 1
    }
    const actionToDispatch = setTargetLanguage(language)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setTargetLanguage(language)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with setSourceMethod', () => {
    const mockDispatch = jest.fn()
    const method = {
      "id": "112",
      "name": "Array.prototype.concat()",
      description: 'thing',
      syntax: 'another thing',
      docsUrl: 'place.com',
      snippet: 'bad test data'
    }
    const id = "112"
    const actionToDispatch = setSourceMethod(method, id)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setSourceMethod(method, id)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with setSourceId', () => {
    const mockDispatch = jest.fn()
    const id = "42"
    const actionToDispatch = setSourceId(id)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setSourceId(id)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with setTargetId', () => {
    const mockDispatch = jest.fn()
    const id = "42"
    const actionToDispatch = setTargetId(id)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setTargetId(id)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with setResults', () => {
    const mockDispatch = jest.fn()
    const results = [{
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
      }
    ]
    const actionToDispatch = setResults(results)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setResults(results)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with resetSourceMethod', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = resetSourceMethod()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.resetSourceMethod()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with resetResults', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = resetResults()
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.resetResults()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
