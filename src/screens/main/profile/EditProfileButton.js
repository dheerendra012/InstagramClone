import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import UpdateProfile from './UpdateProfile';
import { vh,vw } from '../../../components/dimension';

export default function EditProfileButton({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('UpdateProfile')}>
      <View style={{ marginTop: 10 }}>
        <View
          style={styles.editProfileButtonView}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: '#0088f8' }}>Edit Profile</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  editProfileButtonView: {
    flex: 1,
    height: vw(30),
    borderRadius: 5,
    marginStart: vw(10),
    marginEnd: vw(10),
    backgroundColor: '#000',
    justifyContent: 'center',
    borderColor: '#262626',
    borderWidth: 1,
  }
})