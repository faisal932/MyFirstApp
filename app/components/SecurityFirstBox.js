import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const SecurityFirstBox = () => {
    return (
        <View style={styles.container} >
            <MaterialCommunityIcons name = "shield-lock-outline" style={styles.iconstyle} />
            <Text style={styles.txtstyle} >Whatsapp secures your conversations with{"\n"}end-to-end encryption. This means your{"\n"} messages, calls and status updates stay{"\n"}between you and the people you choose.{"\n"}Not even WhatsApp can read or listen to{"\n"}them. Learn more </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginLeft:25
    },
    iconstyle:{
        fontSize: 99,
        alignSelf: 'center',
        margin:44,
        marginTop:75,
        color: 'green'
    },
    txtstyle:{
        fontSize:16,
        marginBottom:74,
        fontWeight: '400'
    }
})
