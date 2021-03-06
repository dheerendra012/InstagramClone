import React, {version} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import StoryListItem from './StoryListItem';
import colors from '../../../../assets/colors';
import { styles } from '../../activity/activityScreen';

export default function StoryContainer({stories, storyOnPress}) {
  return (
    <View style={{marginTop:20}}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        indicatorStyle={'white'}
        horizontal={true}
        data={stories}
        renderItem={({item}) => (
          <StoryListItem item={item} storyOnPress={storyOnPress} />
        )}
        keyExtractor={(item) => item.key}
      />
      <View style={Styles.sperator}></View>
    </View>
  );
}

const Styles = StyleSheet.create({
  sperator: {
    backgroundColor: colors.seperatorLineColor,
    height: 0.5,
  },
});
