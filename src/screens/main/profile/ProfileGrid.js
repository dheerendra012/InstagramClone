import React from 'react';
import {View, Image,FlatList, TouchableOpacity,StyleSheet, SafeAreaView} from 'react-native';
import { vh, vw } from '../../../components/dimension';

const data = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
  {key: '7'},
  {key: '8'},
  {key: '9'},
  {key: '10'},
  {key: '11'},
  {key: '12'},
  {key: '13'},
  {key: '14'},
  {key: '15'},

];

let i=1080
function Test() {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#000'}}>
      <TouchableOpacity
        onPress={() => console.log('Pressed Profile Grid Image')}>
        <Image
          source={{uri: `https://picsum.photos/1920/${i++}`}}
          style={styles.imgTouchable}/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function ProfileGrid() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <Test/>}
      numColumns={3}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}
const styles = StyleSheet.create({
  imgTouchable: {
    height: vh(150),
    flex: 1,
    marginEnd: vw(2),
    marginBottom: vh(2),
    alignItems: 'center',
  },
})