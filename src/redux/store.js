import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const allMiddlewares = [];

function bindMiddleware(middlewares) {
  return applyMiddleware(...middlewares);
}

const enhancers = [];

enhancers.push(bindMiddleware(allMiddlewares));

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, compose(...enhancers));

export const persistor = persistStore(store);

export default store;
