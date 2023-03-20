import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import SmoothPinCodeInput from 'rn-smooth-pincode-input';
import TouchID from 'react-native-touch-id';

const PinVerificationScreen = ({navigation}) => {
  const securityCode = useSelector(state => state?.App?.securityCode);
  const biometricsEnabled = useSelector(state => state?.App?.biometricsEnabled);
  const [errorVisible, setErrorVisible] = useState(false);
  const pinInputRef = React.useRef(null);
  const [code, setCode] = useState('');

  useEffect(() => {
    // do this if biometrics is enabled in store
    if (biometricsEnabled) {
      TouchID.authenticate('Please login using Face/Touch ID', {})
        .then(success => {
          navigation.replace('CompanyCode');
        })
        .catch(error => {
          setErrorVisible(true);
        });
    }
  }, []);

  const onFulfillCode = enteredCode => {
    if (enteredCode === securityCode) {
      navigation.replace('CompanyCode');
    } else {
      setErrorVisible(true);
    }
  };

  const onChangePinInput = input => {
    setCode(input);
    setErrorVisible(false);
    if (input.length === 4) {
      onFulfillCode(input);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeaderText}>Enter your secure PIN</Text>
      <View style={styles.pinInputContainer}>
        <SmoothPinCodeInput
          ref={pinInputRef}
          value={code}
          onTextChange={c => onChangePinInput(c)}
        />
        {errorVisible && (
          <Text style={styles.errorMessageText}>Incorrect Pin</Text>
        )}
      </View>
    </View>
  );
};

export default PinVerificationScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
  pageHeaderText: {fontSize: 28, fontWeight: '600'},
  errorMessageText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'red',
    marginTop: 6,
  },
  pinInputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
