import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import {WebView} from 'react-native-webview';
import SubscriptionListItem from '../../components/subscriptionListItem';

const HomeScreen = ({route, navigation}) => {
  const {params = {}} = route;
  const {companyData = {}} = params;
  const {subscriptionPlans = []} = companyData;

  const onClickSettingsIcon = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.pageHeaderText}>Active Plans</Text>
        <TouchableOpacity onPress={onClickSettingsIcon}>
          <Image
            source={require('../../../assets/images/settings.png')}
            style={styles.settingsImage}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={subscriptionPlans}
          numColumns={2}
          renderItem={({item}) => <SubscriptionListItem subscription={item} />}
          contentContainerStyle={styles.listStyle}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </View>
      <WebView
        source={{uri: 'http://adminprepaid.uat.kitecash.in/'}}
        containerStyle={styles.webViewContainer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 50, paddingHorizontal: 16},
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingsImage: {height: 30, width: 30},
  listStyle: {marginTop: 20},
  webViewContainer: {marginTop: 20},
  pageHeaderText: {fontSize: 28, fontWeight: '600'},
});
