import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export function InputText({label,placeholder,data,setData}){
    return(
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput value={data} onChangeText={setData} style={styles.inputAuth} placeholder={placeholder}/>
        </View>
    )
}

export function InputPassword({label,placeholder,data,setData,eyeStatus,setEyeStatus}){
    return(
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.passwordContainer}>
                <TextInput 
                    value={data}
                    onChangeText={setData}
                    secureTextEntry={eyeStatus} 
                    style={[styles.inputAuth,styles.absolute,styles.password]} 
                    placeholder={placeholder}/>
                <TouchableOpacity style={[styles.absolute,styles.eye]} onPress={setEyeStatus}>
                <FontAwesomeIcon icon={eyeStatus?faEye:faEyeSlash}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function InputPhone({label,placeholder,data,setData}){
    return(
        <View>
            <Text style={styles.label}>
                {label}
            </Text>
            <View style={styles.flex}>
                <Text style={[styles.inputPhone,{flex:1,borderWidth:1,marginRight:16,color:'#9795A4',borderColor:'#bdbdbd'}]}>+84</Text>
                <TextInput value={data} onChangeText={setData} keyboardType='number-pad' style={[styles.inputPhone,{flex:6}]} placeholder={placeholder} placeholderTextColor={'#d1d1d1'}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    label:{
        textAlign:'left',
        fontSize:15,
        color:'grey',
        marginBottom:0,
        marginTop:15
      },
    
      inputAuth:{
        borderBottomWidth : 1,
        borderColor:'#bdbdbd',
        color:'black',
        fontWeight:'500',
        fontSize:20,
        paddingVertical:5
      },
      passwordContainer:{
        position:'relative',
        marginBottom: 38
      },
    
      absolute:{
        position:'absolute',
      },
    
      password:{
        left:0,
        right:0
      },
    
      eye:{
        right:5,
        paddingTop:8,
        paddingLeft:5,
        paddingRight:5
      },
      inputPhone:{
        fontWeight:'500',
        borderWidth : 1,
        borderColor:'#bdbdbd',
        color:'black',
        fontWeight:'500',
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:8
      },
    
      flex:{
        marginTop:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
      }
})