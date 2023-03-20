import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import SmoothPinCodeInput from 'rn-smooth-pincode-input';
import {useDispatch, useSelector} from 'react-redux';
import {
  setBiometricsEnabled,
  setSecurityCode,
} from '../../redux/actions/app.actions';
import TouchID from 'react-native-touch-id';

const AppSecurityScreen = ({route, navigation}) => {
  const securityCode = useSelector(state => state?.App?.securityCode);
  const pinInputRef = useRef(null);
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const onFulfillCode = () => {
    if (code && code.length === 4) {
      dispatch(setSecurityCode(code));
    }
    navigation.navigate('Settings');
  };

  const onPressBiometricsButton = () => {
    TouchID.isSupported()
      .then(() => {
        dispatch(setBiometricsEnabled(true));
        Alert.alert('Awesome', 'Biometrics enabled.');
      })
      .catch(() => {
        Alert.alert(
          'Sorry',
          'Biometrics is not supported on this devics. Please use pin code instead.',
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeaderText}>Use a PIN you can remember</Text>
      <View style={styles.pinInputContainer}>
        <SmoothPinCodeInput
          ref={pinInputRef}
          value={code}
          onTextChange={c => setCode(c)}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.submitButton,
          // eslint-disable-next-line react-native/no-inline-styles
          {backgroundColor: code.length !== 4 ? 'grey' : 'blue'},
        ]}
        disabled={code.length !== 4}
        onPress={onFulfillCode}>
        <Text style={styles.submitText}>Continue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: securityCode.length === 4 ? 'blue' : 'grey'},
        ]}
        onPress={onPressBiometricsButton}>
        <Text style={styles.submitText}>Enable Biometrics</Text>
      </TouchableOpacity>
      {securityCode.length !== 4 && (
        <Text style={{marginTop: 6}}>
          You must set a PIN before enabling biometrics
        </Text>
      )}
    </View>
  );
};

export default AppSecurityScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
  pageHeaderText: {fontSize: 28, fontWeight: '600'},
  submitButton: {
    marginTop: 20,
    paddingVertical: 16,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    marginLeft: 10,
  },
  pinInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    paddingVertical: 16,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
