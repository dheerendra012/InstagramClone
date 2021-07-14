import React from 'react';
import {Image, View,TouchableOpacity,StyleSheet} from 'react-native';
import images from 'assets/images';
import { vh, vw } from '../../../components/dimension';

export default function GridIcon() {
  return (
    <View
      style={styles.gridIconView}>
      <TouchableOpacity>
        <Image source={images.grid} style={styles.gridIconImg} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridIconView: {
    justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: vw(10),
  },
  gridIconImg:{
    width: vw(25), 
    height: vw(25)
  }
})