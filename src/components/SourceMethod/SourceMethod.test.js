import React from 'react';
import { SourceMethod, mapStateToProps } from './SourceMethod';


describe('mapStateToProps', () => {
  it('should return source emthod from state', () => {
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
      sourceMethod: {
        "id": "112",
        "name": "Array.prototype.concat()",
        description: 'thing',
        syntax: 'another thing',
        docsUrl: 'place.com',
        snippet: 'bad test data'
      }
    }
    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})