import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const SubscriptionListItem = ({subscription}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.planNameText}>{subscription}</Text>
        <Text style={styles.planDescriptionText}>
          Plan description lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum
        </Text>
      </View>
      <View style={styles.planChargeFooter}>
        <Text style={styles.planChargeText}>₹ 299.00</Text>
        <Text style={styles.planChargeFrequencyText}>{` / month`}</Text>
      </View>
    </View>
  );
};

export default SubscriptionListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#fafbfc',
    marginHorizontal: 8,
    height: Dimensions.get('window').width / 2 - 40,
  },
  planNameText: {
    fontSize: 20,
    fontWeight: '500',
  },
  planDescriptionText: {
    marginTop: 10,
  },
  planChargeText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  planChargeFrequencyText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: '500',
  },
  planChargeFooter: {flexDirection: 'row', alignItems: 'center'},
});
