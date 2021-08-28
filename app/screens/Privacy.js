import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import { Appbar, PrivacyNormalBoxes,PrivacyFirstBox, PrivacyLastBox } from '../components';
export const Privacy = () => {
    return (
        <View >
            <StatusBar backgroundColor = "#437540" />
            <Appbar iconname = "arrowleft" name = "Privacy" />
            <PrivacyFirstBox />  
            <PrivacyNormalBoxes headertxt = "Last seen" txt = "Nobody" />
            <PrivacyNormalBoxes headertxt = "Profile photo" txt = "My contacts" />
            <PrivacyNormalBoxes headertxt = "About" txt = "My contacts" />
            <PrivacyNormalBoxes headertxt = "Status" txt = "8 contacts selected" />
            <PrivacyLastBox header = "Read receipts" description = {`If turned off, you won't send or recieve
Read receipts. Read receipts are always
sent for group chats.`} />
        </View>
    )
}



const styles = StyleSheet.create({})
