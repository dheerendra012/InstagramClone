import React from 'react';
import {Text, View, StyleSheet, Vibration} from 'react-native';
import colors from 'assets/colors';
import { vh,vw } from '../../../../components/dimension';

export default function PostText({post}) {
  return (
    <View
      style={styles.postTextStyle}>
      <Text style={{color: colors.text, fontWeight: 'bold', fontSize: 13}}>
        {post.userName}
      </Text>
      <Text style={{color: colors.text}}>{post.text}</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  postTextStyle:{
    marginStart: vw(15),
        marginEnd: vw(15),
        flexDirection: 'column',
        marginTop: vw(10),
  }
})