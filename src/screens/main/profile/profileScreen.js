import React from 'react';
import { FlatList, View } from 'react-native';

import ProfileHeader from './ProfileHeader';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../assets/colors';
import GridIcon from './gridIcon';
import ProfileTop from './ProfileTop';

const data = [{key: '1'}];

export default function profileScreen({navigation}) {
  return (
    <View style={{flex:1}}>
    <ProfileTop navigation={navigation}/>
    <FlatList
      style={{flex: 1, backgroundColor:'#000'}}
      data={data}
      renderItem={() => (
        <View>
          <ProfileHeader navigation={navigation}/>
          <UserBio />
          <EditProfileButton navigation={navigation} />
          <ConstantStories />
          <LineSeperator />
          <GridIcon />
          <ProfileGrid />
        </View>
      )}
    />
    </View>
    
  );
}
