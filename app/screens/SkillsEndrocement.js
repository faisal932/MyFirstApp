import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Appbar,EndorcementsModal } from '../components'

export const SkillsEndrocement = () => {
    return (
        <View>
            
            <Appbar iconname = "arrowleft" name = "SkillEndorcements" />
            <Text style={styles.headingtxt} >Skills & Endorcements</Text>
            <EndorcementsModal  />
        </View>
    )
}



const styles = StyleSheet.create({
    headingtxt:{
        fontSize: 22,
        fontWeight: '500'
    }
})
