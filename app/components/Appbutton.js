import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Appbutton = props => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.txt}>{props.text}</Text>
    </View>
  );
};

 

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#42d1f5',
        alignSelf: 'center',
        padding: 11,
        borderRadius: 22,
        margin: 11,
        width: "90%",
    },
    txt:{
        alignSelf: 'center',
        fontSize: 22,
        color: 'white',
    }
});
