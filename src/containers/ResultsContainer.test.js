import React from 'react';
import { ResultsContainer, mapStateToProps, mapDispatchToProps } from './ResultsContainer';
import { setResults } from '../actions'

describe('mapStateToProps', () => {
  it('should return results', () => {
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
      results: [
        {
          "id": "111",
          "name": "Array.of()",
          description: 'thing',
          syntax: 'another thing',
          docsUrl: 'place.com',
          snippet: 'bad test data'
        }, {
          "id": "112",
          "name": "Array.prototype.concat()",
          description: 'thing',
          syntax: 'another thing',
          docsUrl: 'place.com',
          snippet: 'bad test data'
        }
      ]
    }
    const expected = {
      results: [{
        "id": "111",
        "name": "Array.of()",
        description: 'thing',
        syntax: 'another thing',
        docsUrl: 'place.com',
        snippet: 'bad test data'
      }, {
        "id": "112",
        "name": "Array.prototype.concat()",
        description: 'thing',
        syntax: 'another thing',
        docsUrl: 'place.com',
        snippet: 'bad test data'
      }]
    }
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
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
})