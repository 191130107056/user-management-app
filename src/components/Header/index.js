import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {images} from '../../theme';

const Header = ({heading, isBack, onBack}) => {
  return (
    <View style={[styles.container, isBack ? styles.row : null]}>
      {isBack ? (
        <TouchableOpacity onPress={isBack ? onBack : () => {}}>
          <Image source={images.back} style={styles.backIcon} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default Header;
