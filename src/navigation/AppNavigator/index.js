import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserListScreen from '../../screens/UserListScreen';
import {USER_DETAIL_SCREEN, USER_LIST_SCREEN} from '../../constants/Stack';
import UserDetailScreen from '../../screens/UserDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={USER_LIST_SCREEN} component={UserListScreen} />
      <Stack.Screen name={USER_DETAIL_SCREEN} component={UserDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;