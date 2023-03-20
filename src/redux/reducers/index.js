import {combineReducers} from 'redux';
import AppReducer from './app.reducer';

const combinedReducer = combineReducers({
  App: AppReducer,
});

const rootReducer = (state, action) => combinedReducer(state, action);

export default rootReducer;
