import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from 'assets/colors';
import { vh,vw } from '../../../../components/dimension';

export default function PostLikes({post}) {
  return (
    <TouchableOpacity
      onPress={() => console.log('Pressed Post Likes')}
      style={{marginLeft: vw(15), marginTop: vw(10), marginEnd: vw(15)}}>
      <Text style={{color: colors.text, fontWeight: 'bold'}}>
        {post.likeCount} likes{' '}
      </Text>
    </TouchableOpacity>
  );
}
