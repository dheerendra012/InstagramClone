import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Underline extends Component {
    render() {
        return (
            <View style={styles.UnderlineView}>
            </View>
        )
    }
}

export default Underline
const styles=StyleSheet.create({
    UnderlineView:{
        height:0.5,
        backgroundColor:'#990012'
    }
    
})