import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

function persistWrapper(reducer, blacklist, key) {
  const config = {
    key,
    storage: AsyncStorage,
    blacklist,
  };
  return persistReducer(config, reducer);
}

export default persistWrapper;
