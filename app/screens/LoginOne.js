import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import { Appinput,Button } from '../components';
export const LoginOne = () => {
  return (
    <View style = {styles.contaier}>
      <Text style={styles.txtone}>SIGNUP</Text>
        <Appinput plcholder = "Enter Email" path = {require("../assets/email.png")} />
        <Appinput plcholder = "Enter Password" path = {require("../assets/lock.png")} style={styles.inputstyle} />    <Appinput plcholder = "Confirm Password" path = {require("../assets/agreement.png")} />
        <Button lable = "Submit" />
        <Text style = {styles.txtstyle} >Login</Text>
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
    marginBottom:77
  },
  contaier:{
    flex:1,
  },
  txtstyle:{
    fontSize:22,
    alignSelf:'center',
    margin:22
  }
});
