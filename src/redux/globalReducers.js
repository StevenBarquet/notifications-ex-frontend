// ---Dependency´s
import { combineReducers } from 'redux';
// ---Reducers
import { appStateReducer } from './appState/reducer';

// -----------------------------------------ALL REDUX REDUCERS----------------------------------
export const rootReducer = combineReducers({
  appStateReducer,
});
