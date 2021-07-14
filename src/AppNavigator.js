import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './screens/auth/AuthNavigator';
import MainNavigator from './screens/main/MainNavigator'
import SplashScreen from './screens/SplashScreen';
import Login from './screens/auth/Login';
import Login2 from './screens/auth/Login2';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';

const Stack = createStackNavigator();
export class AppNavigator extends Component {
  render() {
    return (
      <Stack.Navigator headerMode={false} initialRouteName='SplashScreen'>
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Login2' component={Login2} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='AuthNavigator' component={AuthNavigator} />
        <Stack.Screen name='MainNavigator' component={MainNavigator} />

      </Stack.Navigator>
    )
  }
}

export default AppNavigator
