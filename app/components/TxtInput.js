import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

export const TxtInput = () => {
    return (
        <View>
            <TextInput style = {styles.input} placeholder="Enter Phone number" keyboardType="number-pad" />
        </View>
    )
}



const styles = StyleSheet.create({
    input:{
        borderColor: '#42d1f5',
        borderWidth: 2,
        padding: 11,
        margin: 11,
        borderRadius: 11,
        fontSize: 22
    }
})
