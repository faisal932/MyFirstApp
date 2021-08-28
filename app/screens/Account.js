import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Appbar,AcountLines} from '../components';

export const Account = () => {
    return (
        <View>
            <StatusBar backgroundColor = "#437540" />
            <Appbar iconname = "arrowleft" name = "Account" />
            <AcountLines iconname = "lock" txt = "Privacy" />
            <AcountLines iconname = "tripadvisor" txt = "Security" />
            <AcountLines iconname = "circular-graph" txt = "Tow step varification" />
            <AcountLines iconname = "cycle" txt = "Change number" />
            <AcountLines iconname = "text-document-inverted" txt = "Request account info" />
            <AcountLines iconname = "clipboard" txt = "Delete my account" />
        </View>
    )
}



const styles = StyleSheet.create({})
