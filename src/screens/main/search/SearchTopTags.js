import React from 'react';
import { View, Text,FlatList, TouchableOpacity, StyleSheet, TouchableOpacityBase} from 'react-native';
import colors from 'assets/colors';
import { vh,vw } from '../../../components/dimension';

const data = [
  {key: '1', tag: 'IGTV'},
  {key: '2', tag: 'Travel'},
  {key: '3', tag: 'Architecture'},
  {key: '4', tag: 'Store'},
  {key: '5', tag: 'Decoration'},
  {key: '6', tag: 'Art'},
  {key: '7', tag: 'Food'},
  {key: '8', tag: 'Stil'},
  {key: '9', tag: 'TV and Movies'},
  {key: '10', tag: 'Do it Yourself'},
  {key: '11', tag: 'Comedy'},
  {key: '12', tag: 'Music'},
];

function TagContainer({tag}) {
  return (
    <View onPress={() => console.log('Pressed Search Tag')}>
      <TouchableOpacity
        style={styles.tagView}>
        <Text
          style={styles.tagTextStyle}>
          {tag}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function SearchTopTags() {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={({item, index}) => <TagContainer tag={item.tag} />}
    />
  );
}

const styles=StyleSheet.create({
  tagView:{
    height: vh(30),
    borderWidth: vw(1.5),
    borderColor: colors.seperatorLineColor,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: vh(10),
    backgroundColor: '#000',
    marginHorizontal: vw(5),
    marginTop:vh(40),
  },
  tagTextStyle:{
    color: 'white',
    marginHorizontal: vw(15),
    fontWeight: 'bold',
  }
})
