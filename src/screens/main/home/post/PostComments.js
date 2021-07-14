import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import colors from 'assets/colors';
import { vw } from '../../../../components/dimension';

export default function PostComments({post}) {
  return (
    <TouchableOpacity
      style={{marginTop: vw(5), marginStart: vw(15)}}
      onPress={() => console.log('Pressed Post Comments')}>
      <Text style={{color: colors.textFaded2}}>
        View all {post.commentCount} comments
      </Text>
    </TouchableOpacity>
  );
}
