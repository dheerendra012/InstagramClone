import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { vh, vw } from '../../../components/dimension';

export default function UserBio() {
  return (
    <View
      style={styles.userViewStyle}>
      <View style={{ marginBottom: vw(5) }}>
        <Text style={styles.userName}>Spyker</Text>
      </View>
      <View style={{ marginBottom: vw(5) }}>
        <Text style={styles.userBio}>๐ฏ๐๐๐๐๐๐๐๐ก ๐๐๐๐ค๐ช๐ฃ๐ฉ๐</Text>
        <Text style={styles.userBio}>๐ท๐๐๐ค๐ฉ๐ค๐๐ง๐๐ฅ๐๐ฎ๐ท</Text>
        <Text style={styles.userBio}>๐๐๐ช๐จ๐๐ ๐ก๐ค๐ซ๐๐ง๐ถ</Text>
        <Text style={styles.userBio}>โฝ๐๐ฅ๐ค๐ง๐ฉ๐จ ๐ก๐ค๐ซ๐๐งโณ</Text>
        <Text style={[styles.userBio, { marginTop: vh(5), justifyContent: 'center', alignItems: 'center' }]}>If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  userViewStyle: {
    flex: 1,
    flexDirection: 'column',
    marginStart: vw(10),
    marginTop: vw(20),
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    bottom: vw(10),
    marginStart: vw(30),
    color: '#0088f8'
  },
  userBio: {
    color: '#fff'
  }
})