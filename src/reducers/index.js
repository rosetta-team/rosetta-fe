import { combineReducers } from 'redux';
import { sourceLanguage } from './sourceLanguage';
import { sourceMethod } from './sourceMethod'; 
import { targetLanguage } from './targetLanguage';

export const rootReducer = combineReducers({
  sourceLanguage,
  sourceMethod,
  targetLanguage
})