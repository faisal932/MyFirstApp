import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'

export const Appinput = () => {
    return (
    <View style={styles.container}>
        <View style={styles.imgcontaierstyle}>
        <Image style = {styles.imgstyle} source = {require('../assets/email.png')} />
        </View>
      <TextInput placeholder="Enter Username or Email" style={styles.inputstyle} />
    </View>
  );
};



const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        overflow:'hidden',
        borderRadius:22,
        margin: 20,
        width:'90%',
        height: '17%',
        flexDirection: 'row',
        
    },
    inputstyle:{
        width:'80%',
        height:'100%',
        borderLeftWidth:2,
        fontSize: 22
    },
    imgstyle:{
        width: '40%',
        height: '40%',
        resizeMode: 'cover'
    },
    imgcontaierstyle:{
        width:'20%',
        height:'100%',
                alignItems: 'center',
        justifyContent: 'center'
    }
})
