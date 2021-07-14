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
        <Text style={styles.userBio}>💯𝙊𝙛𝙛𝙞𝙘𝙞𝙖𝙡 𝙖𝙘𝙘𝙤𝙪𝙣𝙩🔐</Text>
        <Text style={styles.userBio}>📷𝙋𝙝𝙤𝙩𝙤𝙜𝙧𝙖𝙥𝙝𝙮📷</Text>
        <Text style={styles.userBio}>😘𝙈𝙪𝙨𝙞𝙘 𝙡𝙤𝙫𝙚𝙧🎶</Text>
        <Text style={styles.userBio}>⚽𝙎𝙥𝙤𝙧𝙩𝙨 𝙡𝙤𝙫𝙚𝙧⛳</Text>
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