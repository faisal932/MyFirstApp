import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PrivacyFirstBox = () => {
    return (
        <View style={styles.container} >
            <Text style = {styles.headerstyle} >Who can see my personal info</Text>
            <Text style = {styles.txtstyle} >If you don't share your Last Seen, you won't be able to{"\n"}
                see other people's Last Seen</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginLeft:25,
        marginTop:11
    },
    headerstyle:{
        color: "#499c44",
        fontWeight: 'bold'
    },
    txtstyle:{
        fontSize:13,
        marginTop:5
    }
})
