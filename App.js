import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from './src/screens/SplashScreen';

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    )
  }
}
export default App

