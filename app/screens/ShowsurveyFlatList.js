import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import { Appbar } from '../components'
import { w, h } from "react-native-responsiveness";
import RadioButtonRN from 'radio-buttons-react-native';
export const ShowsurveyFlatList = () => { 
    const data = [
        {
            question:"Which element of the event did you like the most?",
            option1: "Arrangement ",
            option2: "Lunch",
            id:"1"
        },
        {
            question:"How did you first learn about the event?",
            option1: "Many things",
            option2: "Nothing",
            id:"2"
        },
        {
            question:"Overall, how would you rate the event?",
            option1: "Good",
            option2: "Excellent",
            id:"3"
        },
    ]
    const [RadioArray,setRadArray] = useState([]);
    return (
        <View>
            <Appbar iconname = "arrowleft" name = "ShowServey" />
            <View style = {styles.container} >
                <View style={styles.imgcontainer}>
                    <Image source = {require("../assets/checklist.png")} style = {styles.imgstyle} />
                </View>
                <Text style={styles.headingstyle} >Biit Gala Event </Text>
                <FlatList
                style={styles.flatliststyle} 
                data = {data}
                keyExtractor = {(item) => item.id}
                renderItem = {({item}) =>(
                     <View>
                    <Text style={styles.quetiontxtstyle}>{item.question}</Text>
                    
                <RadioButtonRN
                    data = {[{label:item.option1},{label: item.option2}]}
                    style={styles.radiostyle}
                    textStyle = {styles.radiotxtsyle}
                    boxStyle = {styles.boxstyle}
                    selectedBtn  = {(it) => {setRadArray( [...RadioArray,it])} }
                />
                </View>
                )}
                /> 
                <TouchableOpacity style={RadioArray.length === 3 ?styles.btnstylesubmitfirst :styles.btnstylesubmit}
                onPress = {() => alert("First Answer : "+RadioArray[0].label+"\nSecond Answer : "+RadioArray[1].label+"\nThird Answer : "+RadioArray[2].label)}
                >
                <Text style={styles.submitbtntxtsyle} disabled={true} >Submit</Text>
                
            </TouchableOpacity>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F2F5CA',
        height: h('100%'),
        width: w('100%'),
        // flex: 1
    },
    imgcontainer:{
        height: h('13%'),
        width: w('28%'),
        backgroundColor: '#F4735D',
        borderRadius: h('14%'),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: h('1.5%'),
        marginTop: h('3%'),
    },
    imgstyle:{
        resizeMode: 'contain',
        width: '75%',
        height: '75%',
        alignSelf: 'center',
        paddingLeft: 11,
    },
    headingstyle:{
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: h('1.4%'),
        fontSize: h('3%'),
    },
    quetiontxtstyle:{
        alignSelf: 'center',
        fontWeight: '500',
        fontSize: h('2.6%'),
        paddingHorizontal: h('3.3%')
    },
    radiostyle:{
        marginHorizontal: h('2%'),
        // borderWidth: 2
    },
    boxstyle:{
        borderWidth:2,
        borderColor: 'red',
    },radiotxtsyle:{
        color: 'red',
        fontWeight: '600',
        fontSize: h('2.5%')
    },
    btnstylesubmit:{
        width: '90%',
        padding: h('2%'),
        justifyContent:'center',
        alignSelf:'center',
        alignItems: 'center',
        borderWidth: h('0.3%'),
        borderRadius: h('5%'),
        marginBottom: h('8%'),
        borderColor: 'red',
        marginTop: h('1%')
    },
    flatliststyle:{
        // paddingVertical: h('25%'),
        // marginBottom: h('23%')
    },
    submitbtntxtsyle:{
        fontSize: h('3%'),
        backgroundColor: 'blue'
    },
    


})
