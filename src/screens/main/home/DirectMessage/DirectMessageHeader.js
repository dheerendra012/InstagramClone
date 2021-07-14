import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,SafeAreaView } from 'react-native'
import colors from '../../../../assets/colors'
import images from '../../../../assets/images'
import MainNavigator from '../../MainNavigator'
import {vh ,vw} from '../../../../components/dimension'

export class DirectMessageHeader extends Component {

    render() {
        console.log(this.props)
        return (
            <SafeAreaView style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.nav.navigation.goBack()}>
                        <Image
                            source={images.dmBackButton}
                            style={[styles.headerLogo,{marginLeft:vw(15)}]}
                        />
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity>
                        <Image
                            source={images.write}
                            style={styles.headerLogo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={images.videoCamera}
                            style={[styles.headerLogo]}
                        />
                    </TouchableOpacity>
                    </View>
            </SafeAreaView>
        )
    }
}

export default DirectMessageHeader
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        backgroundColor:'#000',
        justifyContent:'space-between',
        paddingTop:vw(10)
    },
    headerLogo: {
        height: vw(20),
        width: vw(20),
        marginRight:vw(15),
        marginBottom:vw(10)
    },
})
