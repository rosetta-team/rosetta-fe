export const setSourceLanguage = (language) => ({
  type: 'SET_SOURCE',
  sourceLanguage: language,
})

export const setSourceId = (id) => ({
  type: 'SET_SOURCE_ID',
  sourceId: id
})

export const setSourceMethod = (method, id) => ({
  type: 'SET_METHOD',
  sourceMethod: method,
  methodId: id
})

export const setTargetLanguage = (language) => ({
  type: 'SET_TARGET',
  targetLanguage: language
})

export const setTargetId = (id) => ({
  type: 'SET_TARGET_ID',
  targetId: id
})

export const setResults = (results) => ({
  type: 'SET_RESULTS',
  results
})