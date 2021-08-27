import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export const ProfilePicandTxt = () => {
    return (
        <View style={styles.container} >
            <Image source = {require('../assets/profilepic.jpg')} style={styles.img}  />
            <View style = {styles.txtcontainer}>
            <Text style={styles.txtstyle} >Muhammad Faisal</Text>
            <Text >"Wrong Number---------"</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    img:{
        resizeMode: 'cover',
        borderRadius: 222,
        width: 100,
        height:100,
        margin:22,
    },
    txtstyle:{
        fontWeight: '700',
        fontSize: 22,
        marginTop:33
    },
    descriptionstyle:{

    },
    txtcontainer:{
        margin:11,
        alignItems:'center'
    }
})
