import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles';
import Header from '../../components/Header';
import { strings } from '../../theme';

const UserDetailScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Header heading={strings.userDetails} isBack={true} onBack={() => navigation.goBack()}/>
     <Text>User Details</Text>
    </View>
  );
};

export default UserDetailScreen;