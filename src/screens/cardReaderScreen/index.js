import React from 'react';
import CardScanner from 'rn-card-scanner';

const CardReaderScreen = ({route, navigation}) => {
  const onCardScan = response => {
    if (response && response.cardNumber) {
      navigation.navigate('CardDetails', {cardDetails: response});
    }
  };

  return (
    <CardScanner
      style={{flex: 1}}
      didCardScan={response => {
        onCardScan(response);
      }}
    />
  );
};

export default CardReaderScreen;
