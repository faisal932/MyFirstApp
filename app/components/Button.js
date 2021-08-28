import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Button = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.tochablestyle} >
                <Text style={styles.txtstyle} >{props.lable}</Text>
            </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    tochablestyle:{
        backgroundColor:'pink',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:22,
        width:'75%',
        padding: 11,
        marginTop:55
    },
    txtstyle:{
        fontSize:22
    }
})
