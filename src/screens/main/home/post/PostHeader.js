import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import palette from 'assets/palette';
import images from 'assets/images';
import colors from 'assets/colors';
import PostImage from './PostImage';
import { vh,vw } from '../../../../components/dimension';

let i=300
export default function PostHeader({post}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.nameContainer}>
        <Image
          source={{uri: `https://picsum.photos/${i++}`}}
          style={Styles.personImage}
        />
        <View>
          <Text style={Styles.personName}> {post.userName} </Text>
          <Text style={Styles.placeName}> {post.placeName} </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={images.more} style={Styles.iconMore} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(10),
    marginStart: vw(10),
    marginEnd: vw(10),
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: vw(50),
    height: vw(50),
    borderRadius: vw(25),
  },
  personName: {
    color: colors.text,
    marginStart: vw(10),
    fontWeight: 'bold',
  },
  placeName: {
    color: colors.text,
    marginStart: vw(10),
    fontSize: 12,
  },
  iconMore: {
    height: vw(15),
    width: vw(15),
  },
});
