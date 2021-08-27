import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
export const TextField = (props) => {
    return (
        <View style = {styles.container} >
            <Entypo name = {props.iconname} style = {styles.iconstyle} />
            <View>
                <Text style = {styles.txtstyle} >{props.txt}</Text>
                <Text >{props.detail}</Text>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginTop:22
    },
    iconstyle:{
        fontSize:28,
        color: '#437555',
        margin:15
    },
    txtstyle:{
        fontSize:28,
        
    }

})
