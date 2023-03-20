import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './rootStack';

export const navigationRef = React.createRef();

const NavigationRoot = ({}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default NavigationRoot;
