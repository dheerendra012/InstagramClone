import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import images from '../../../assets/images'
import colors from '../../../assets/colors'
import { vh, vw, } from '../../../components/dimension'

export class ProfileTop extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateNew')}>
                    <Image
                        source={images.addIcon}
                        style={[styles.profileHeaderImg, { marginLeft: vw(10) }]}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.profileTitle,{bottom:vh(5)}]}>
                        Spyker
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                    <Image
                        source={images.list3}
                        style={[styles.profileHeaderImg, { marginRight: vw(10) }]}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}

export default ProfileTop

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.bottomBackGround,
        borderColor: colors.seperatorLineColor,
        borderWidth:0.2,
        borderBottomColor:'grey',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding:10,
    },
    profileTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    profileHeaderImg: {
        resizeMode: 'contain',
        width: vw(20),
        height: vh(20),
        marginBottom: vh(10),
        marginTop:vh(10)
    }

})
