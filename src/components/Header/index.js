import React from 'react';
import { Text, View} from 'react-native';
import {styles} from './styles';

const Header = ({heading, isBack, onBack}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default Header;
