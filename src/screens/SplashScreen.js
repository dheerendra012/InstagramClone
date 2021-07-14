import React, {useRef, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import images from '../assets/images';
import colors from '../assets/colors';
import Login from './auth/Login';
import { NavigationContainer } from '@react-navigation/native';

const SplashScreen= (props) => {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.6,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2000,
      useNativeDriver: false,
    }).start(()=>props.navigation.navigate('Login'));
  }, [moveAnim, fadeAnim]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.Image
          style={[styles.image, {opacity: fadeAnim}]}
          source={require('../assets/images/instagramlogo.png')}
        />
        <Animated.View style={[styles.logoContainer, {marginLeft: moveAnim}]}>
          <Text style={[styles.logoText]}>I</Text>
          <Animated.Text style={[styles.logoText, {opacity: fadeAnim}]}>
            nstagram
          </Animated.Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  logoText: {
    fontSize: 35,
    marginTop: 20,
    color:colors.textFaded2,
    fontWeight: '700',
  },
  contentContainer: {
    top: '30%',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  logoContainer: {
    flexDirection: 'row',
  },
});