import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity,disable } from 'react-native';

export function Button({title,onPress,borderRadius=100}){
    return(
        <TouchableOpacity style={[styles.btn,{borderRadius:borderRadius}]} onPress={onPress} disabled={disable}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#FF5400",
        paddingVertical:16,
        alignItems:'center',
        borderRadius:100
      },
      btnText:{
        fontSize:18,
        color:'white'
      }
})