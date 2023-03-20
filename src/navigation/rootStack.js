import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';
import CardReaderScreen from '../screens/cardReaderScreen';
import CardDetailsScreen from '../screens/cardDetailsScreen';
import AppSecurityScreen from '../screens/appSecurityScreen';
import {useSelector} from 'react-redux';
import PinVerificationScreen from '../screens/pinVerification';
import CompanyCodeScreen from '../screens/companyCodeScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  const securityCode = useSelector(state => state?.App?.securityCode);
  if (securityCode && securityCode.length === 4) {
    return (
      <Stack.Navigator
        initialRouteName={'PinVerification'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="PinVerification"
          component={PinVerificationScreen}
          options={{statusBarStyle: 'dark'}}
        />
        <Stack.Screen name="CompanyCode" component={CompanyCodeScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{statusBarStyle: 'dark'}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{statusBarStyle: 'dark'}}
        />
        <Stack.Screen
          name="CardReader"
          component={CardReaderScreen}
          options={{statusBarStyle: 'light'}}
        />
        <Stack.Screen
          name="CardDetails"
          component={CardDetailsScreen}
          options={{statusBarStyle: 'dark'}}
        />
        <Stack.Screen
          name="AppSecurity"
          component={AppSecurityScreen}
          options={{statusBarStyle: 'dark'}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      initialRouteName={'CompanyCode'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CompanyCode" component={CompanyCodeScreen} />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{statusBarStyle: 'dark'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{statusBarStyle: 'dark'}}
      />
      <Stack.Screen
        name="CardReader"
        component={CardReaderScreen}
        options={{statusBarStyle: 'light'}}
      />
      <Stack.Screen
        name="CardDetails"
        component={CardDetailsScreen}
        options={{statusBarStyle: 'dark'}}
      />
      <Stack.Screen
        name="AppSecurity"
        component={AppSecurityScreen}
        options={{statusBarStyle: 'dark'}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
