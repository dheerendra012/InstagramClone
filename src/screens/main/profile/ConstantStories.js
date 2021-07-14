import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import StoryListItem from 'components/StoryListItem';
import colors from 'assets/colors';
import images from 'assets/images';
import { vh, vw } from '../../../components/dimension';

export default function ConstantStories() {
  return (
    <ScrollView horizontal={true}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginStart: 10,
          marginEnd: 10,
          marginTop: 10,
          marginBottom: 5,
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <View
            style={styles.profileStoryView}>
            <Image
              source={images.addIcon}
              style={styles.addIcon}
            />
          </View>
        </TouchableOpacity>
        <Text
          style={styles.newTitleText}>
          New
        </Text>
      </View>
      <StoryListItem name="Holiday" />
      <StoryListItem name="Diwali" />
      <StoryListItem name="Friends" />
      <StoryListItem name="Vacation" />
      <StoryListItem name="Enjoy" />
      <StoryListItem name="Festival" />
      <StoryListItem name="Holi" />
      <StoryListItem name="Delhi" />
      <StoryListItem name="College" />
      <StoryListItem name="Temple" />
      <StoryListItem name="Tour" />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profileStoryView: {
    backgroundColor: colors.bottomBackGround,
    width: vw(64),
    height: vw(64),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  addIcon: {
    width: vw(20),
    height: vw(20),
    borderRadius: 50
  },
  newTitleText:{
    color: 'white',
    fontSize: 12,
  }
})