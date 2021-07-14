import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Login2 from './Login2';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const Stack = createStackNavigator();
export class AuthNavigator extends Component {
    
    render() {
        return (
            <Stack.Navigator headerMode={false}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Login2' component={Login2} />
                <Stack.Screen name='SignUp' component={SignUp} />
                <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
            </Stack.Navigator>
        )
    }
}

export default AuthNavigator
