import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import activityScreen from './activityScreen';
import colors from 'assets/colors';
import {Text} from 'react-native';

export default function activityNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Activity"
        component={activityScreen}
        options={{
          headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
}
