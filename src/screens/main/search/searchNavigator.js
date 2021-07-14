import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import searchScreen from './searchScreen';
import {View, Text, Dimensions, SafeAreaView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import colors from 'assets/colors';

export default function searchNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={searchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: colors.bottomBackGround,
            shadowColor: 'transparent',
          },
          headerTitle: () => <View></View>,
          headerLeft: () => (
            <SafeAreaView style={{marginHorizontal: 5, marginVertical: 5,marginTop:30}}>
              <TextInput
                style={{
                  backgroundColor: colors.textInputBackground,
                  height: 40,
                  width: Dimensions.get('screen').width - 10,
                  fontWeight: 'bold',
                  borderRadius: 10,
                  paddingStart: 20,
                  fontSize: 16,
                  color: 'white',
                }}
                placeholder="Search"
                placeholderTextColor={colors.textFaded2}
              />
            </SafeAreaView>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
