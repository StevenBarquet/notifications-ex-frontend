import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
// ---Reducers
import { rootReducer } from 'src/redux/globalReducers';

// Redux dev tools configuration
let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export const reduxStorage = store;
