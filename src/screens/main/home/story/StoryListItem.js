import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { vh,vw } from '../../../../components/dimension';

export default function StoryListItem({item, storyOnPress}) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={storyOnPress}>
        <LinearGradient
          colors={['#CA1D7E', '#E35157', '#F2703F']}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
          style={{borderRadius: 100, padding: 2}}>
          <View style={{borderWidth: 2, borderRadius: 100}}>
            <Image
              source={{uri: item.src}}
              style={{width: vw(55), height: vw(55), borderRadius: 70}}
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <View>
        <Text style={Styles.storyText}> {item.key} </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginStart: vw(10),
    marginEnd: vw(10),
    marginBottom: vw(5),
    alignItems: 'center',
  },
  storyText: {
    color: 'white',
    fontSize: 12,
    marginTop: vw(5),
  },
});
