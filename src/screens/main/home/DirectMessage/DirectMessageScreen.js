import React from 'react';
import { View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import DirectMessageHeader from './DirectMessageHeader';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessagesList from './MessagesList';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import colors from 'assets/colors';
import images from 'assets/images';
import { vh, vw } from '../../../../components/dimension';

const data = [{ key: '1' }];

export default function DirectMessageScreen(props) {
  return (
    <View style={{ flex: 1, backgroundColor: '#000',  }}>
      <DirectMessageHeader nav={props} />
      <DirectMessageSearch />
      <FlatList
        style={{ backgroundColor: '#000', flex: 1 }}
        data={data}
        renderItem={() => (
          <View style={{margin:10}}>
            <Title />
            <MessagesList />
          </View>
        )}
      />
      <TouchableOpacity>
        <View style={styles.footerView}>
          <View style={styles.cameraView}>
            <Image
              source={images.dmBottomCamera}
              style={styles.cameraLogo}
            />
            <Text style={styles.cameraText}>Camera</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  footerView: {
    backgroundColor: colors.bottomBackGround,
    height: vw(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cameraLogo: {
    width: vw(25),
    height: vw(25)
  },
  cameraText: {
    color: '#4296f5',
    marginStart: vw(10)
  }
})