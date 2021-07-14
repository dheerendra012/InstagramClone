import React from 'react';
import { View, Image, Text, StyleSheet,FlatList } from 'react-native';
import { vh,vw } from '../../../components/dimension';

const data = [
  { key: '1' },
  { key: '2' },
  { key: '3' },
];

function Test() {
  return (
    <View style={{ flexDirection: 'column' ,marginTop:vh(15)}}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          source={{ uri: 'https://picsum.photos/512' }}
          style={[styles.imgStyle,{marginEnd:vw(2)}]}
        />

        <Image
          source={{ uri: 'https://picsum.photos/519' }}
          style={[styles.imgStyle,{marginEnd:vw(2)}]}
        />

        <Image
          source={{ uri: 'https://picsum.photos/518' }}
          style={styles.imgStyle}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Image
          source={{ uri: 'https://picsum.photos/511' }}
          style={[styles.imgStyle,{marginEnd:vw(2)}]}
        />

        <Image
          source={{ uri: 'https://picsum.photos/510' }}
          style={[styles.imgStyle,{marginEnd:vw(2)}]}
        />

        <Image
          source={{ uri: 'https://picsum.photos/513' }}
          style={styles.imgStyle}
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Image
            source={{ uri: 'https://picsum.photos/515' }}
            style={[styles.imgStyle,{marginEnd:vw(2)}]}
          />
          <Image
            source={{ uri: 'https://picsum.photos/516' }}
            style={[styles.imgStyle,{marginEnd:vw(2)}]}
          />
        </View>
        <View style={{ flex: 2 }}>
          <Image
            source={{ uri: 'https://picsum.photos/517' }}
            style={styles.imgStyle}
          />
        </View>
      </View>
    </View>
  );
}

export default function SearchGrid() {
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => <Test/>}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    height: vh(150),
    flex: 1,
    marginBottom: vh(2),
    alignItems: 'center',
  }
})