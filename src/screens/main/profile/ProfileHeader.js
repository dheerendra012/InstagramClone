import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { vh, vw } from '../../../components/dimension';
import ProfileGrid from './ProfileGrid'

let i=600
export default function ProfileHeader({navigation}) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity>
        <Image
          source={{uri: `https://picsum.photos/${i++}`}}
          style={Styles.prfilePicture}
        />
      </TouchableOpacity>
      <View style={Styles.container2}>
        <View style={Styles.container3}>
          <TouchableOpacity onPress={()=>navigation.navigate('ProfileGrid')}>
            <Text style={Styles.numberContainer}>10</Text>
            <Text style={Styles.text}>Posts</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.container3}>
          <TouchableOpacity>
            <Text style={Styles.numberContainer}>160</Text>
            <Text style={Styles.text}>Followers</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.container3}>
          <TouchableOpacity>
            <Text style={Styles.numberContainer}>100</Text>
            <Text style={Styles.text}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(20),
  },
  prfilePicture: {
    height: vw(80),
    width: vw(80),
    borderRadius: 100,
    marginLeft: vw(20),
  },
  numberContainer: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    marginEnd: vw(20),
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
  container3: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});
