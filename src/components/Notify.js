import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Notify({color,title,day,time,timeLong}){
    return(
        <TouchableOpacity style={styles.flexRow}>
            <View style={{flex:1,justifyContent:'center'}}>
                <View style={{backgroundColor:color,height:140,width:4,borderRadius:50}}></View>
            </View>
            <View style={{flex:8 ,paddingRight:20,flexDirection:'column'}}>
                <Text style={styles.notifyTitle}>
                    {title}
                </Text>
                <Text style={styles.notifySubTitle}>
                    {day} | {time}
                </Text>
            </View>
            <View style={{flex:3,alignItems:'flex-end',paddingTop:100}}>
                <View style={styles.notifyTime}>
                    <Text style={styles.notifyTimeContent}><FontAwesomeIcon color='#7D8592' icon={faClock}/>   {timeLong}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    flexRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',        
        paddingHorizontal:20,
        marginBottom:24,
        marginTop:20
    },
    notifyTitle:{
        paddingTop:4,
        fontSize:20,
        fontWeight:'600',
        flex:10,
        alignItems:'flex-start'
    },
    notifySubTitle:{
        flex:1,
        fontSize:16,
        color:'#9795A4',
        alignItems:'flex-end'
    },
    notifyTime:{
        backgroundColor:'#F4F9FD',
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:10
    },
    notifyTimeContent:{
        color:'#7D8592',
        fontSize:14
    }
    
})