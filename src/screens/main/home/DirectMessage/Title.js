import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { vh, vw } from '../../../../components/dimension';

export default function Title() {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>
        Messages
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: vh(10),
    marginStart: vw(10)
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
})