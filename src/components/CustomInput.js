import React, { Component } from 'react'
import { Text, View,StyleSheet,TextInput} from 'react-native'

export class CustomInput extends Component {
    constructor(){
        super()
      }
      render(){
        return (
        <TextInput style={styles.inpText}
        placeholder={this.props.holder}
        secureTextEntry={this.props.secureText}
        />
      );
      }
    }
    const styles = StyleSheet.create({
      inpText:{
        borderWidth:1,
        borderBottomColor:'grey',
        margin:1,
        padding:10,
        color:'#fff',
        bottom:10,
        width:'90%',
        marginRight:10,
        marginLeft:10
      }
    });

export default CustomInput
