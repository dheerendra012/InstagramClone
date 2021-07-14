import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from 'assets/colors';
import images from 'assets/images';
import StoryCamera from '../StoryCamera/StoryCamera';
import { vh, vw } from '../../../../components/dimension';
import { NavigationContainer } from '@react-navigation/native';

let i=600
export default function MessageListItem({ data,}) {
  return (
    <View style={styles.contentView}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
        <Image
          source={{ uri: `https://picsum.photos/${i++}` }}
          style={{ width: 60, height: 60, borderRadius: 70 }}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatNameView}>
          <Text style={styles.chatNameText}>
            {data.name}
          </Text>
          <View style={styles.messageView}>
            <Text style={{ color: colors.textFaded2 }}>{data.message}</Text>
            <Image
              source={images.dot}
              style={styles.dotStyle}
            />
            <Text style={{ color: colors.textFaded2, }}>2h</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity >
        <Image
          source={images.photo_camera}
          style={styles.cameraLogo}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: vw(10),
    marginEnd: vw(10),
    marginTop: vw(15),
  },
  chatNameView: {
    flexDirection: 'column',
    marginStart: vw(15),
    marginTop: vw(10)
  },
  chatNameText: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vw(5)
  },
  dotStyle: {
    width: vw(3),
    height: vw(3),
    marginStart: vw(5),
    marginTop: vw(5)
  },
  cameraLogo: {
    width: vw(20),
    height: vw(20),
    marginTop: vw(10)
  }
})