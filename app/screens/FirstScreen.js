import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Appbutton,TxtInput } from '../components';
export const FirstScreen = () => {
    return (
        <View>
            <TxtInput />
            <Appbutton text = {"Save Change"} />
        </View>
    )
}



const styles = StyleSheet.create({})
