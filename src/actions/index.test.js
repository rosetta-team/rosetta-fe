import * as actions from './index'

describe('actions', () => {
  describe('setSourceLanguage', () => {
    it('should return an object with type of SET_SOURCE and language', () => {
      const mockLanguage = 'Ruby';
      const expected = {
        type: 'SET_SOURCE',
        sourceLanguage: mockLanguage
      }

      const result = actions.setSourceLanguage(mockLanguage);

      expect(result).toEqual(expected);
    });
  });

  describe('setSourceId', () => {
    it('should return an object with type of SET_SOURCE_ID and language string', () => {
      const mockSourceId = 1;
      const expected = {
        type: 'SET_SOURCE_ID',
        sourceId: mockSourceId
      }

      const result = actions.setSourceId(mockSourceId);

      expect(result).toEqual(expected);
    });
  });

  describe('setSourceMethod', () => {
    it('should return an object with type of SET_METHOD, source method, and method id', () => {
      const mockSourceMethod = 'Array#map';
      const expected = {
        type: 'SET_METHOD',
        sourceMethod: mockSourceMethod,
      }

      const result = actions.setSourceMethod(mockSourceMethod);

      expect(result).toEqual(expected);
    });
  });

  describe('setTargetLanguage', () => {
    it('should return an object with type of SET_TARGET and target method', () => {
      const mockLanguage = 'Ruby';
      const expected = {
        type: 'SET_TARGET',
        targetLanguage: mockLanguage
      }

      const result = actions.setTargetLanguage(mockLanguage);

      expect(result).toEqual(expected);
    });
  });

  describe('setTargetId', () => {
    it('should return an object with type of SET_TARGET_ID and target ID', () => {
      const mocktargetId = 54;
      const expected = {
        type: 'SET_TARGET_ID',
        targetId: mocktargetId
      }

      const result = actions.setTargetId(mocktargetId);

      expect(result).toEqual(expected);
    });
  });

  describe('setResults', () => {
    it('should return an object with type of SET_RESULTS and array of results', () => {
      const mockResults = [{ id: 1, name: 'map'},
                           { id: 2, name: 'push'}];
      const expected = {
        type: 'SET_RESULTS',
        results: mockResults
      }

      const result = actions.setResults(mockResults);

      expect(result).toEqual(expected);
    });
  });
});
