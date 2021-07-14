import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import colors from '../../../assets/colors';
import { vh, vw } from '../../../components/dimension';
import {DATA} from './activityList'


export default class ActivityNotificationScreen extends Component {
  renderFunction = item => {
    if (item.notificationType === '0') {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(' ,')}
            </Text>
            <Text style={styles.text}> and others shared </Text>
            <Text style={styles.text}>{item.noOfPhotos + ' Photos.'}</Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else if (item.notificationType === '1') {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.text}>Follow </Text>
            <Text style={styles.userNames}>
              {item.mentionedUsers.join(',')}
            </Text>
            <Text style={styles.text}> and others you know to see their photos and videos. </Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.sectionedItemWrapper}>
          <Image
            style={styles.notificationImage}
            source={item.notificationImage}
          />
          <Text style={styles.notificationContentWrapper}>
            <Text style={styles.userNames}>{item.mentionedUsers[0]}</Text>
            <Text style={styles.text}> and </Text>
            <Text style={styles.userNames}>{item.mentionedUsers[1]}</Text>
            <Text style={styles.text} > follows </Text>
            <Text style={styles.userNames}>{item.mentionedUsers[2]}</Text>
            <Text style={styles.text}> on instagram see their posts. </Text>
            <Text style={styles.duration}>{item.notificationDuration}</Text>
          </Text>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}> Follow </Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerView}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>
            Activity
          </Text>
        </View>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>New</Text>
        </View>
        <View style={styles.sectionedListWrapper}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => this.renderFunction(item)}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  headerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: vw(10),
    marginVertical: vw(10),
    backgroundColor: colors.bottomBackGround,
    shadowColor: colors.seperatorLineColor,
    borderWidth: 0.2,
    borderBottomColor: 'grey',
  },
  headerWrapper: {
    display: 'flex',
    borderBottomColor: 'red',
    borderBottomWidth: 0.2,
    marginTop: vw(-10)
  },
  headerTitle: {
    fontSize: 20,
    padding: vw(15),
    color: '#fff',
    fontWeight:'600'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vw(10),
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  sectionedListWrapper: {
    display: 'flex',
    flex: 1,
    padding: vw(15),
  },
  sectionedItemWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationImage: {
    height: vw(50),
    width: vw(50),
    borderRadius: 70,
  },
  notificationContentWrapper: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: vw(15),
  },
  userNames: {
    fontWeight: 'bold',
    color: '#fff'
  },
  text: {
    color: '#fff'
  },
  duration: {
    color: 'grey',
  },
  followButton: {
    backgroundColor: '#0088f8',
    borderRadius: 5,
  },
  followButtonText: {
    color: '#fff',
    padding: vw(5),
  },
});
