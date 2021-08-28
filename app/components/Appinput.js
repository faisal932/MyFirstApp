import React from 'react'
import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import { TxtInput } from './TxtInput'

export const Appinput = (props) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.imgcotainer} >
                <Image source = {props.path} style={styles.imgstyle} />
            </View>
            <TextInput style={styles.TxtInput} placeholder = {props.plcholder} />
            
        </View>
  );
};



const styles = StyleSheet.create({
    container:{
        width:'90%',
        // backgroundColor: 'green',
        margin:11,
        borderWidth:2,
        borderRadius: 22,
        height: 55,
        overflow: 'hidden',
        alignSelf: 'center',
        flexDirection:'row',
        marginTop: 22,
    },
    imgstyle:{
        width:'80%',
        height: '80%',
        resizeMode: 'contain'
    },
    TxtInput:{
        // backgroundColor: 'blue',
        width:'80%',
        color:'white',
        fontSize:22,
        borderLeftWidth: 2,
    },
    imgcotainer:{
        // backgroundColor: 'yellow',
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
   
})
