import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

export default function PostImage({post,imageUrl}) {
  console.log('post',post.imgUrl)
  return <Image source={{uri: imageUrl}} style={Styles.postImg} />;
}

const Styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
  },
});
