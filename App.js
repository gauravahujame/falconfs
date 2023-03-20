import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Loader from './src/components/loader';
import NavigationRoot from './src/navigation';
import store, {persistor} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationRoot />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
