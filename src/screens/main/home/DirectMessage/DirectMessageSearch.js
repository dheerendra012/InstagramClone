import React from 'react';
import { View, Dimensions, TextInput, Text, StyleSheet } from 'react-native';
import colors from 'assets/colors';
import { vh, vw } from '../../../../components/dimension';

export default function DirectMessageSearch() {
  return (
    <View>
      <TextInput
        placeholder="Search"
        placeholderTextColor={colors.textFaded2}
        style={styles.searchBox}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: colors.textInputBackground,
    height: vw(40),
    borderRadius: vw(10),
    marginHorizontal: vw(10),
    marginVertical: vw(10),
    fontWeight: 'bold',
    paddingStart: vw(10),
    fontSize: 15,
    color: 'white',
  }

})