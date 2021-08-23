import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { Appinput } from '../components';
export const LoginOne = () => {
  return (
    <View style = {styles.contaier}>
      <Text style={styles.txtone}>Login</Text>
        <Appinput />
        <Appinput />
    </View>
  );
};

const styles = StyleSheet.create({
  txtone: {
    fontSize: 80,
    alignSelf: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#878682',
  },
  contaier:{
    width: '100%',
    height: '100%',
    // flex:1,
  }
});
