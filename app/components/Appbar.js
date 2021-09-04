import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
export const Appbar = (props) => {

    return (
        <View style = {styles.container}>
            <AntDesign name = {props.iconname} style = {styles.fontstyle} />
            <Text style = {styles.txtstyle} >{props.name}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 54,
        alignItems: 'center',
        borderBottomWidth: 0.5,
    },
    fontstyle:{
        // color: 'white',
        fontSize: 22,
        margin: 5,
        marginTop: 11
    },
    txtstyle:{
        fontSize:22,
        // color: 'white',
        margin:5,
        marginTop:7,
        marginLeft:22

    }
})
