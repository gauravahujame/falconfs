import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

const BASE_URL = 'https://stage.tab.kitecash.in/prepaid/v1/companies/code/';

const CompanyCodeScreen = ({navigation}) => {
  const companyNameInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const onChangeCompanyName = text => {
    if (errorMessage) {
      setErrorMessage('');
    }
    setCompanyName(text);
  };

  const onPressSubmitButton = () => {
    if (!companyName) {
      setErrorMessage('Please enter the company code');
      return;
    }
    setLoading(true);
    axios
      .get(`${BASE_URL}${companyName}`)
      .then(res => {
        setCompanyName(companyName);
        setLoading(false);
        navigation.navigate('Home', {companyData: res?.data});
      })
      .catch(() => {
        setLoading(false);
        setErrorMessage('Invalid company code');
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}>
      <Image
        source={require('../../../assets/images/banner.png')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.outerContainer}>
        <View>
          <Text style={styles.signupText}>
            Hello there! Sign up to your account.
          </Text>
          <Text style={styles.inputLabel}>Company Code</Text>
          <TextInput
            ref={companyNameInputRef}
            onChangeText={onChangeCompanyName}
            placeholder="Please enter the company code"
            value={companyName}
            autoCorrect={false}
            autoCapitalize="none"
            onSubmitEditing={onPressSubmitButton}
            placeholderTextColor="#a9a9a9"
            style={styles.companyNameInput}
          />
          {errorMessage && (
            <Text style={styles.errorMessageText}>{errorMessage}</Text>
          )}
        </View>
        <View>
          <Text style={styles.helpText}>Need help?</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactUsText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressSubmitButton}
            disabled={!companyName || companyName.length < 3}
            style={[
              styles.submitButton,
              // eslint-disable-next-line react-native/no-inline-styles
              {backgroundColor: companyName.length < 2 ? '#a9a9a9' : 'blue'},
            ]}>
            {loading && <ActivityIndicator color="white" />}
            <Text style={styles.submitText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CompanyCodeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  signupText: {marginBottom: 10, fontSize: 20, fontWeight: 'bold'},
  inputLabel: {marginBottom: 6, fontSize: 14, fontWeight: '600'},
  companyNameInput: {
    borderColor: '#fafbfc',
    backgroundColor: '#fafbfc',
    borderWidth: 1,
    borderRadius: 6,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  errorMessageText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'red',
    marginTop: 6,
  },
  helpText: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 16,
  },
  contactButton: {
    paddingVertical: 16,
    backgroundColor: '#f8fbff',
    color: 'white',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 12,
  },
  submitButton: {
    paddingVertical: 16,
    color: 'white',
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
  contactUsText: {fontSize: 14, fontWeight: '600'},
  backgroundImage: {width: Dimensions.get('window').width, marginBottom: 20},
  keyboardAvoidingView: {flex: 1},
});
