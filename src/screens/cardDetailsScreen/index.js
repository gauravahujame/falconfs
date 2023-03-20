import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardDetailsScreen = ({route}) => {
  const {cardDetails = {}} = route.params;
  const {cardNumber, expiryMonth, expiryYear} = cardDetails;
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Card Number</Text>
      <Text style={styles.valueText}>{cardNumber}</Text>
      <Text style={styles.labelText}>Expiry Month</Text>
      <Text style={styles.valueText}>{expiryMonth}</Text>
      <Text style={styles.labelText}>Expiry Year</Text>
      <Text style={styles.valueText}>{expiryYear}</Text>
    </View>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
  labelText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  valueText: {fontSize: 20, fontWeight: '600'},
});
