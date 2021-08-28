import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
export const AcountLines = (props) => {
    return (
        <View style = {styles.container} >
            <Entypo name = {props.iconname} style = {styles.iconstyle} />
            <Text style = {styles.txtstyle} >{props.txt}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        
    },
    iconstyle:{
        fontSize: 25,
        margin:22,
        color: "#54a170"
    },
    txtstyle:{
        fontSize: 20,
        marginTop: 20
    }
})
