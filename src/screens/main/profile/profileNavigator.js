import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View, Image,TouchableOpacity,StyleSheet} from 'react-native';
import colors from 'assets/colors';
import images from 'assets/images';
import Settings from './Settings';
import profileScreen from './profileScreen';
import CreateNew from './CreateNew'
import EditProfileButton from './EditProfileButton';
import UpdateProfile from './UpdateProfile';
import ProfileGrid from './ProfileGrid';
export default function profileNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={profileScreen} options={{headerShown:false}}/>
      <Stack.Screen name='Settings' component={Settings} options={{headerShown: false}}/>
      <Stack.Screen name='CreateNew' component={CreateNew} options={{headerShown: false}}/>
      <Stack.Screen name='EditProfileButton' component={EditProfileButton} options={{headerShown: false}}/>
      <Stack.Screen name='UpdateProfile' component={UpdateProfile} options={{headerShown: false}}/>
      <Stack.Screen name="ProfileGrid" component={ProfileGrid} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
