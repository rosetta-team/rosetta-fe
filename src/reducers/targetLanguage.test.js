import { targetLanguage } from './targetLanguage'
import { setTargetLanguage, setTargetId } from '../actions'

describe('targetLanguage reducer', () => {
  it('should return initial state', () => {
    const expected = {};

    const result = targetLanguage(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add target language name to state if type is SET_TARGET', () => {
    const expected = { name: 'JavaScript' }

    const result = targetLanguage({},setTargetLanguage('JavaScript'));

    expect(result).toEqual(expected);
  });

  it('should add target language ID to state if type is SET_TARGET_ID', () => {
    const expected = { id: 2 };

    const result = targetLanguage({}, setTargetId(2));

    expect(result).toEqual(expected);
  });
});
