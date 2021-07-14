import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import DirectMessageSearch from './DirectMessageSearch';
import Title from './Title';
import MessageListItem from './MessageListItem';

const data = [
  {
    key: '1',
    name: 'John',
    message: "Hello John! What's going on",
  },
  {key: '2', name: 'Raj', message: 'Hope we meet Soon!'},
  {key: '3', name: 'Jack', message: 'Great to See you again Jack'},
  {
    key: '4',
    name: 'Bhavin',
    message: 'All the very best!',
  },
  {key: '5', name: 'Divyanshi', message: 'Sorry! for late reply'},
  {key: '6', name: 'Tanmay', message: 'Yup! Have some party tanny'},
  {key: '7', name: 'Rahul', message: 'Just Missing you Bro'},
  {key: '8', name: 'Prakhar', message: 'Going for a ride bro'},
  {key: '9', name: 'Pooja', message: 'Thanks bhai  for being with me'},
  {key: '10', name: 'Shreya', message: 'Sorry! for late reply'},
  {key: '11', name: 'Ayan', message: 'Great to See you again Ayan'},
  {key: '12', name: 'Aman', message: 'Dude! make some Noise'},
  {key: '13', name: 'Tanvi', message: 'Thank you so much :)'},
  {key: '14', name: 'Shivansh', message: 'Got your gift Bhai'},
  {key: '15', name: 'Candela', message: 'Great to See you again Candela'},
];

export default function MessagesList() {
  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => <MessageListItem data={item} />}
    />
  );
}
