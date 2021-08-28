import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar, PrivacyLastBox, SecurityFirstBox } from '../components'

export const Security = () => {
    return (
        <View>
            
            <Appbar iconname = "arrowleft" name = "Security" />
            <SecurityFirstBox />
            <PrivacyLastBox header = "Show security notifications" description = {`Turn on this setting to receive notifications
when one of your contact's security code
changes. Learn more
`} />
        
        </View>
    )
}



const styles = StyleSheet.create({})
