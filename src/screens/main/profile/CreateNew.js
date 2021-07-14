import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity ,SafeAreaView,ScrollView} from 'react-native'
import colors from 'assets/colors';
import images from '../../../assets/images';
import Underline from '../../../components/Underline';
import { vh,vw } from '../../../components/dimension';

export default class CreateNew extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                    <Image style={styles.backArrow} source={require('../../../assets/images/backArrow.png')} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Create New</Text>
                </View>
                <View style={{ marginHorizontal: vw(5), marginVertical: vw(10), marginTop: 5 }}>
                    <TextInput
                        style={styles.searchTextInput}
                        placeholder="Search"
                        placeholderTextColor={colors.textFaded2}
                    />
                </View>
                <ScrollView>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.feed} />
                    <Text style={styles.content}>Feed Post</Text>
                </TouchableOpacity >
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.reel} />
                    <Text style={styles.content}>Reel</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.story} />
                    <Text style={styles.content}>Story</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.storyhighlight} />
                    <Text style={styles.content}>Story Highlight</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.igtv} />
                    <Text style={styles.content}>IGTV Video</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.guide} />
                    <Text style={styles.content}>Guide</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.help} />
                    <Text style={styles.content}>Help</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.about} />
                    <Text style={styles.content}>About</Text>
                </TouchableOpacity>
                <Underline/>
                <TouchableOpacity style={styles.viewContent}>
                    <Image style={styles.imgLogo} source={images.theme} />
                    <Text style={styles.content}>Themes</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: vh(60),alignSelf:'center' }}>
                    <Text style={[styles.content, { letterSpacing: 2 }]} >Facebook</Text>
                    <View style={{ flexDirection: 'row', margin: vw(8), marginLeft: vw(15) }}>
                        <Image style={styles.imgLogo1} source={images.fb} />
                        <Image style={styles.imgLogo1} source={images.messenger} />
                        <Image style={styles.imgLogo1} source={images.whatsapp} />
                    </View>
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },
    headerView: {
        padding: vw(15),
        flexDirection: 'row'
    },
    backArrow: {
        height: vw(20),
        width: vw(20),
        marginTop: vh(10)
    },
    title: {
        color: colors.text,
        fontSize: 20,
        fontWeight: '600',
        marginTop: vw(6),
        marginLeft: vw(20)
    },
    searchTextInput:{
        backgroundColor: colors.textInputBackground,
        height: vw(40),
        fontWeight: 'bold',
        borderRadius: 10,
        paddingStart: vw(20),
        fontSize: 16,
        color: 'white',
        marginRight:vw(10),
        marginLeft:vw(10)
    },
    viewContent: {
        flexDirection: 'row',
        margin: vw(10),
        left: vw(15),
        alignItems:'center'
    },
    content: {
        color: '#fff',
        fontSize: 16,
        margin: vw(5),
        left: vw(10),
    },
    imgLogo: {
        height: vw(23),
        width: vw(22)
    },
    imgLogo1: {
        height: vw(15),
        width: vw(15),
        marginLeft: vw(5)
    },
})
