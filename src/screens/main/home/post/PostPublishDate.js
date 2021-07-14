import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';
import colors from 'assets/colors';
import { vh,vw } from '../../../../components/dimension';

export default function PostPublishDate({post}) {
  return (
    <TouchableOpacity onPress={() => console.log('Pressed Post Publish Date')}>
      <Text
        style={styles.dateStyle}>
        {post.publishDate}
      </Text>
    </TouchableOpacity>
  );
}
const styles=StyleSheet.create({
  dateStyle:{
    color: colors.textFaded2,
    marginTop: vw(5),
    marginStart: vw(15),
    fontSize: 12,
  }
})