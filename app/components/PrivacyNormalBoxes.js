import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PrivacyNormalBoxes = (props) => {
    return (
        <View style={styles.container} >
            <Text style = {styles.header} >{props.headertxt}</Text>
            <Text style = {styles.txtstyle} >{props.txt}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginLeft:25,
        marginTop:28
    },
    header:{
        fontSize:22
    },
    txtstyle:{

    }
})
