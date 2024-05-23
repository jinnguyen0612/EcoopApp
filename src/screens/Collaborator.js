import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { faAdd, faArrowLeft, faBlackboard } from '@fortawesome/free-solid-svg-icons';
import { InputPhone, InputText } from '../components/Input';
import { Button } from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Team} from "../components/Team";

export default function Collaborator({ navigation }){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}} onPress={()=>navigation.goBack()}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <View style={{flex:10}}> 
                    <Text style={styles.headerTitle}>Đội của tôi</Text>
                </View>
                <View style={{flex:1}}>
                
                </View>
            </View>
            <ScrollView style={styles.listTeam}>
                <Team
                    avt={'https://i.pinimg.com/236x/98/96/86/9896861906bb3ae3d515b48a8c3d1c7e.jpg'}
                    name={'Haibara Ai'}
                    sex={'Nữ'}
                    position={'Cộng tác viên'}
                    numMember={0}/>
                <Team
                    avt={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrHTF4m60XB-kU3nhuGEfBxNjTwrmDO2tHpTdabG6Ww&s'}
                    name={'Ku Shin'}
                    sex={'Nam'}
                    position={'Cộng tác viên'}
                    numMember={20}/>
                <Team
                    avt={'https://i.pinimg.com/236x/98/96/86/9896861906bb3ae3d515b48a8c3d1c7e.jpg'}
                    name={'Haibara Ai'}
                    sex={'Nữ'}
                    position={'Cộng tác viên'}
                    numMember={0}/>
                <Team
                    avt={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrHTF4m60XB-kU3nhuGEfBxNjTwrmDO2tHpTdabG6Ww&s'}
                    name={'Ku Shin'}
                    sex={'Nam'}
                    position={'Cộng tác viên'}
                    numMember={20}/>
                <Team
                    avt={'https://i.pinimg.com/236x/98/96/86/9896861906bb3ae3d515b48a8c3d1c7e.jpg'}
                    name={'Haibara Ai'}
                    sex={'Nữ'}
                    position={'Cộng tác viên'}
                    numMember={0}/>
                <Team
                    avt={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrHTF4m60XB-kU3nhuGEfBxNjTwrmDO2tHpTdabG6Ww&s'}
                    name={'Ku Shin'}
                    sex={'Nam'}
                    position={'Cộng tác viên'}
                    numMember={20}/>

                <View style={{height:140}}></View>
            </ScrollView>
            
          <StatusBar style="auto" />
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      
        container: {
            backgroundColor: '#fff',
            minHeight:Dimensions.get('screen').height,

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
      listTeam:{
        marginTop:10
      }
    });