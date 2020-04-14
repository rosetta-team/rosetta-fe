import { sourceLanguage } from './sourceLanguage'
import { setSourceLanguage, setSourceId } from '../actions'

describe('sourceLanguage reducer', () => {
  it('should return the initial state', () => {
    const expected = {};

    const result = sourceLanguage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add name of source language to state if type is SET_SOURCE', () => {
    const expected = { name: 'Ruby'};

    const result = sourceLanguage({}, setSourceLanguage('Ruby'));

    expect(result).toEqual(expected);
  });

  it('should add ID of source language to state if type is SET_SOURCE_ID', () => {
    const expected = { id: 1 };

    const result = sourceLanguage({}, setSourceId(1));

    expect(result).toEqual(expected);
  });
});
