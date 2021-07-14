import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity, SafeAreaView ,ScrollView} from 'react-native'
import colors from 'assets/colors';
import images from '../../../assets/images';
import { vh, vw } from '../../../components/dimension';

export class Settings extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                        <Image style={styles.backArrow} source={require('../../../assets/images/backArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.searchInputView}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <ScrollView>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.follower} />
                    <Text style={styles.content}>Follow and invite friends</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.notification} />
                    <Text style={styles.content}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.privacy} />
                    <Text style={styles.content}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.security} />
                    <Text style={styles.content}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.ads} />
                    <Text style={styles.content}>Ads</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.account} />
                    <Text style={styles.content}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.help} />
                    <Text style={styles.content}>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.about} />
                    <Text style={styles.content}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.theme} />
                    <Text style={styles.content}>Themes</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: vh(10) }}>
                    <Text style={[styles.content, { letterSpacing: 2 }]} >Facebook</Text>
                    <View style={{ flexDirection: 'row', margin: 8, marginLeft: 15 }}>
                        <Image style={styles.imgLogo1} source={images.fb} />
                        <Image style={styles.imgLogo1} source={images.messenger} />
                        <Image style={styles.imgLogo1} source={images.whatsapp} />
                    </View>
                </View>
                <TouchableOpacity >
                    <Text style={[styles.content, { color: '#0088f8' }]}>Accounts Centre</Text>
                </TouchableOpacity>
                <Text style={[styles.content, { color: colors.textFaded2, justifyContent: 'center', fontSize: 15 }]}>Control Settings for connected experiences across Instagram, the Facebook app and Messenger,including story and post sharing and logging in.</Text>
                <TouchableOpacity >
                    <Text style={[styles.content, { color: '#fff', marginTop: vh(10) }]}>Logins</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text style={[styles.content, { color: '#0088f8' }]}>Add accounts</Text>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Text onPress={() => this.props.navigation.navigate('Login')} style={[styles.content, { color: '#0088f8' }]}>Log out</Text>
                </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerView: {
        padding: 15,
        flexDirection: 'row'
    },
    backArrow: {
        height: vw(20),
        width: vw(20),
        marginTop: vw(10)
    },
    title: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '600',
        marginTop: vw(6),
        marginLeft: vw(20)
    },
    searchInputView: {
        marginHorizontal: 5,
        marginVertical: 10,
        marginTop: 5
    },
    searchInput: {
        backgroundColor: colors.textInputBackground,
        height: 40,
        fontWeight: 'bold',
        borderRadius: 10,
        paddingStart: vw(20),
        fontSize: 16,
        color: 'white',
        marginLeft:vw(10),
        marginRight:vw(10)
    },
    viewContent: {
        flexDirection: 'row',
        margin: vw(7),
        left: vw(5),
        paddingLeft:vh(10),
        alignItems:'center'
    },
    content: {
        color: '#fff',
        fontSize: 16,
        margin: vh(5),
        left: vw(10),
    },
    imgLogo: {
        height: vw(25),
        width: vw(25)
    },
    imgLogo1: {
        height: vw(15),
        width: vw(15),
        marginLeft: vw(5)
    },


})
