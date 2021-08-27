import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Appbar } from '../components/Appbar'
import { ProfilePicandTxt } from '../components/ProfilePicandTxt'
import { TextField } from '../components/TextField'

export const Settings = () => {
    return (
        <View>
            <StatusBar backgroundColor = "#437556" />
       <Appbar name = "Settings" iconname = "arrowleft" />
       <ProfilePicandTxt />
       <TextField txt = "Acount" iconname = "key" detail = "Privacy, Security, Change Number" />
       <TextField txt = "Chats" iconname = "chat" detail = "Theme, Wallpapers, chat history"  />
       <TextField txt = "Notifications" iconname = "bell" detail = "Message, group & tones"  />
       <TextField txt = "Storage and data" iconname = "picasa" detail = "Network usage, auto download"  />
       <TextField txt = "Help" iconname = "help" detail = "Help center, contanct us, privacy policy"  />
       <TextField txt = "Invite Friends" iconname = "slideshare" detail = "Help center, contanct us, privacy policy" style={styles.txtfield} marging = "margintop:100" />
       
       </View>
    )
}


const styles = StyleSheet.create({
    txtfield:{
        marginTop:100
    }
})
