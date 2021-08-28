import React,{useState} from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

export const PrivacyLastBox = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style = {styles.container} >
            <View style={styles.firstlinestyle} >
                <Text style={styles.header} >{props.header}</Text>
                <Switch 
                    onValueChange={() => setIsEnabled(!isEnabled)}
                    value = {isEnabled}
                    style={styles.switchstyle}
                  />
                  
            </View>
            <Text>{props.description} </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        marginLeft:25,
        marginTop:30,
    },
    firstlinestyle:{
        flexDirection:'row',
    },
    header:{
        fontSize:18,
        fontWeight: '500',
        width:'80%'
    },
    switchstyle:{
        width:'10%'
    }
})
