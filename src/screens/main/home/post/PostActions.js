import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import images from 'assets/images';
import {vh,vw} from '../../../../components/dimension'

function tapToLike(likeIcon) {
  if (likeIcon % 2 === 0) {
    return images.redHeart;
  } else {
    return images.like;
  }
}
function tapToBookmark(bookmarkIcon) {
  if (bookmarkIcon % 2 === 0) {
    return images.bookmarkWhite;
  } else {
    return images.bookmark;
  }
}

export default function PostActions() {
  const [likeIcon, setLikeIcon] = React.useState(1);
  const [bookmarkIcon, setBookmarkIcon] = React.useState(1);
  return (
    <View style={Styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <TouchableOpacity onPress={() => setLikeIcon(likeIcon + 1)}>
          <Image source={tapToLike(likeIcon)} style={Styles.actionIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Comment')}>
          <Image source={images.comment} style={Styles.actionIcons} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Pressed Direct Message')}>
          <Image source={images.direct_message} style={Styles.actionIcons} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setBookmarkIcon(bookmarkIcon + 1)}>
        <Image
          source={tapToBookmark(bookmarkIcon)}
          style={Styles.actionIcons}
        />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginEnd: vw(15),
    marginTop: vw(15),
  },
  actionIcons: {
    width: vw(23),
    height: vw(23),
    marginStart: vw(15),
  },
});
