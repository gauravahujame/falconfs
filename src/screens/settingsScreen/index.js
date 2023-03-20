import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SettingsScreen = ({navigation}) => {
  const onPressSettingsOption = option => {
    switch (option) {
      case 'cardReader':
        navigation.navigate('CardReader');
        break;
      case 'appSecurity':
        navigation.navigate('AppSecurity');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageHeaderText}>Settings</Text>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => onPressSettingsOption('cardReader')}>
        <Text style={styles.optionTitle}>Card Reader</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => onPressSettingsOption('appSecurity')}>
        <Text style={styles.optionTitle}>App Security</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
  optionTitle: {fontSize: 20, paddingVertical: 10, fontWeight: '500'},
  pageHeaderText: {fontSize: 28, fontWeight: '600', marginBottom: 20},
  optionContainer: {borderBottomWidth: 1, borderBottomColor: '#e0e0e0'},
});
