import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import colors from '../../../assets/colors';
import { vh, vw } from '../../../components/dimension';

export default function addPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>
          Add Post
        </Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>Add Post</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    shadowColor: colors.seperatorLineColor,
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(10),
    marginVertical: vh(10),
    backgroundColor: colors.bottomBackGround,
    shadowColor: colors.seperatorLineColor,
    borderWidth: 0.2,
    borderBottomColor: 'grey',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text: {
    color: 'white',
  },
  headerStyle: {
    backgroundColor: colors.bottomBackGround,
    shadowColor: colors.seperatorLineColor,
    color: 'red'
  },
})