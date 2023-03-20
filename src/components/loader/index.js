import React from 'react';
import {View, ActivityIndicator, StyleSheet, Text} from 'react-native';

const Loader = ({
  color = 'blue',
  size = 'large',
  loadingTxt,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.loadingContainer, style]}>
      <ActivityIndicator size={size} color={color} />
      {loadingTxt ? (
        <Text style={{...styles.loadingTxt, ...textStyle}} color="white">
          {loadingTxt}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  loadingTxt: {
    marginTop: 5,
  },

  loadingContainer: {
    borderWidth: 1,
    alignItems: 'center',
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: -30,
    zIndex: 500,
  },
});

export default Loader;
