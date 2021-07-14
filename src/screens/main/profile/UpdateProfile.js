import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Touchable, SafeAreaView, ScrollView } from 'react-native'
import colors from 'assets/colors';
import images from '../../../assets/images';
import CustomInput from '../../../components/CustomInput';
import Underline from '../../../components/Underline';
import EditProfileButton from './EditProfileButton';
import { vh, vw } from '../../../components/dimension';

export class UpdateProfile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Image style={styles.close} source={require('../../../assets/images/close.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit Profile</Text>
                    <TouchableOpacity >
                        <Image style={[styles.close, { marginStart: '70%',marginVertical:5}]} source={require('../../../assets/images/check.png')} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                <TouchableOpacity style={styles.profilePicView}>
                    <Image style={styles.profilePic} source={require('../../../assets/images/img3.jpeg')} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center' ,marginTop:vh(10)}}>
                    <Text style={[styles.changeProfileText]}>Change profile photo</Text>
                </View>
                <View style={{ padding:10 }}>
                    <Text style={styles.content}>Name</Text>
                    <CustomInput/>
                    <Text style={styles.content}>Username</Text>
                    <CustomInput />
                    <Text style={styles.content}>Website</Text>
                    <CustomInput />
                    <Text style={styles.content}>Bio</Text>
                    <CustomInput />
                </View>

                <View style={{marginTop:vh(5)}}><Underline/></View>
                <TouchableOpacity style={styles.bottomText}>
                    <Text style={[styles.changeProfileText]}>Switch to Professional account</Text>
                </TouchableOpacity>
                <View><Underline/></View>
                <View style={{marginTop:15}}><Underline/></View>
                <TouchableOpacity style={styles.bottomText}>
                    <Text style={[styles.changeProfileText]}>Personal Information settings</Text>
                </TouchableOpacity>
                <View><Underline/></View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default UpdateProfile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerView: {
        padding: vw(15),
        flexDirection: 'row',
        paddingBottom:vw(-4),
        marginVertical:vw(20)
    },
    close: {
        height: vw(20),
        width: vw(20),
    },
    title: {
        color: colors.text,
        fontSize: 18,
        fontWeight: '800',
        marginLeft: vw(20),
        bottom:vh(2)
    },
    viewContent: {
        flexDirection: 'row',
        margin: vw(7),
    },
    content: {
        color: '#E0E0E0',
        fontSize: 16,
        margin: vw(5),
        left: vw(10),
    },
    profilePicView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: vw(20),
    },
    profilePic: {
        height: vw(80),
        width: vw(80),
        borderRadius: 60
    },
    changeProfileText: {
        color: '#0088f8',
        fontSize: 15,
    },
    bottomText:{
        padding:vw(10),
        marginLeft:vw(20)
    }


})