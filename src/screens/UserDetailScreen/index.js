import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';

const UserDetailScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
     <Text>User Details</Text>
    </View>
  );
};

export default UserDetailScreen;