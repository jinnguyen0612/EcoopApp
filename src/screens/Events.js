import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { faAdd, faArrowLeft, faBlackboard } from '@fortawesome/free-solid-svg-icons';
import { InputPhone, InputText } from '../components/Input';
import { Button } from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Team} from "../components/Team";
import { Notify } from '../components/Notify';

export default function Events({ navigation }){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}} onPress={()=>navigation.goBack()}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <View style={{flex:10}}> 
                    <Text style={styles.headerTitle}>Thông báo</Text>
                </View>
                <View style={{flex:1}}>
                    
                </View>
            </View>

            <ScrollView>
              <Notify
                color={'red'}
                title={'Presentation of the new app launch'}
                day={'Today'}
                time={'5:00 PM'}
                timeLong={'1m'}/>
              <Notify
                color={'blue'}
                title={'Presentation of the new app launch'}
                day={'Today'}
                time={'5:00 PM'}
                timeLong={'3m'}/>
              <Notify
                color={'yellow'}
                title={'Presentation of the new app launch'}
                day={'Today'}
                time={'5:00 PM'}
                timeLong={'1h'}/>
              <Notify
                color={'green'}
                title={'Presentation of the new app launch'}
                day={'Today'}
                time={'5:00 PM'}
                timeLong={'2h'}/>
              <Notify
                color={'grey'}
                title={'Presentation of the new app launch'}
                day={'Today'}
                time={'5:00 PM'}
                timeLong={'4h'}/>
              <View style={{height:110}}></View>
            </ScrollView>
            
            
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      
        container: {
            backgroundColor: '#fff',
      },
        header:{
            marginTop:60,
            marginBottom:20,
            paddingHorizontal:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
      },
        headerTitle:{
            fontSize:20,
            textAlign:'center'
      },
        
    });