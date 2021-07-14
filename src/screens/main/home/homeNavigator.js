import React from 'react';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';
import homeScreen from './homeScreen';
import StoryScreen from './story/StoryScreen';
import StoryCamera from './StoryCamera/StoryCamera';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import images from 'assets/images';
import colors from '../../../assets/colors';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';

export default function () {
  const Stack = createStackNavigator();
  StatusBar.setBarStyle('light-content');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={homeScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen
        name="StoryCamera"
        component={StoryCamera}
        options={{gestureDirection: 'horizontal-inverted'}} 
      />
    </Stack.Navigator>
  );
}

