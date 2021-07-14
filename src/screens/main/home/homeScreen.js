import React from 'react';
import { FlatList, View, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import Post from './post/Post';
import colors from '../../../assets/colors';
import StoryContainer from './story/StoryContainer';
import images from '../../../assets/images';
import DirectMessageScreen from './DirectMessage/DirectMessageScreen';
import { vh, vw } from '../../../components/dimension';

let i=1080

export default function homeScreen({ navigation }) {
  const data = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
  ];


  const storyOnPress = () => navigation.navigate('StoryScreen');
  const post = {
    userName: 'Shivam Rai',
    placeName: 'Longewala, Jaisalmer',
    likeCount: 103,
    commentCount: 21,
    text:
      'There is pleasure in the pathless woods, there is rapture in the lonely shore, there is society where none intrudes, by the deep sea, and music in its roar; I love not Man the less, but Nature more.',
    publishDate: new Date().toDateString(),
  };
  const stories = [
    {
      key: 'Rishabh Jain',
      hasStory: true,
      src: 'https://picsum.photos/600',
    },
    {
      key: 'Hritik',
      hasStory: true,
      src: 'https://picsum.photos/601',
    },
    {
      key: 'Jaminson',
      hasStory: true,
      src: 'https://picsum.photos/602',
    },
    {
      key: 'Ronaldo',
      hasStory: true,
      src: 'https://picsum.photos/603',
    },
    {
      key: 'Monte',
      hasStory: true,
      src: 'https://picsum.photos/604',
    },
    {
      key: 'PaulaPoe',
      hasStory: true,
      src: 'https://picsum.photos/605',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.navigate('StoryCamera')}>
          <Image style={styles.logostyle} source={images.photo_camera} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.instaLogo} source={images.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DirectMessageScreen')}>
          <Image style={styles.logostyle} source={images.direct_message} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={data}
        ListHeaderComponent={() => (
          <StoryContainer stories={stories} storyOnPress={storyOnPress} />
        )}
        renderItem={({ item, index }) => (
          <Post post={post} imgUrl= {`https://picsum.photos/1920/${i++}`} />
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  headerView: {
    backgroundColor: colors.bottomBackGround,
    shadowColor: colors.seperatorLineColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vw(10),
    margin: vw(10),
    borderWidth: 0.2,
    borderBottomColor: 'grey',
  },
  logostyle: {
    width: vw(20),
    height: vw(20)
  },
  instaLogo: {
    width: vw(110),
    height: vw(30),
  }
})