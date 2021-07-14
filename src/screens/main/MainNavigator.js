import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import images from 'assets/images';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import StoryCamera from './home/StoryCamera/StoryCamera';
import DirectMessageScreen from './home/DirectMessage/DirectMessageScreen';
import StoryScreen from './home/story/StoryScreen';
import colors from '../../assets/colors';

export default function MainNavigator({navigation}) {
  const Stack = createStackNavigator();
  const NavigateToStoryCamera = () => navigation.navigate('StoryCamera');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{title: '', headerShown: false ,}}
        NavigateToStoryCamera={NavigateToStoryCamera}
      />
      <Stack.Screen
        name="StoryCameraScreen"
        component={StoryCamera}
        options={{
          title: '',
          gestureDirection: 'horizontal-inverted',
          headerShown:false,
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <View
              style={{flexDirection: 'row', flex: 1, justifyContent: 'center',}}>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="DirectMessageScreen"
        component={DirectMessageScreen}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name="StoryScreen"
        component={StoryScreen}
        navigation={navigation}
        options={{
          headerStyle: {backgroundColor: 'black', shadowColor: 'black'},
          title: '',
          headerLeft: () => <View></View>,
        }}
      />
    </Stack.Navigator>
  );
}
