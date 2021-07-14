import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { vh, vw } from '../../../../components/dimension';
let i=600
export default function StoryScreen() {
  return (
    <View style={styles.viewStyle}>
      <Image
        source={{ uri: `https://picsum.photos/${i++}` }}
        style={{
          height: vw(512),
          resizeMode: 'contain',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  }
})