import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { faAdd, faArrowLeft, faBlackboard, faClock } from '@fortawesome/free-solid-svg-icons';
import { InputPhone, InputText } from '../components/Input';
import { Button } from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Team} from "../components/Team";
import { Notify } from '../components/Notify';
import ListAvt, { Avatar } from '../components/ListAvt';


export default function EventDetails(){
    const avtLink = [
        'https://1.bp.blogspot.com/-suPoIp0q7J8/YQP2BoeKQDI/AAAAAAAACEY/5yzEtTUsRpMggIHvBBPAxSmZ79nZKBCVgCLcBGAsYHQ/s750/7.jpg',
        'https://1.bp.blogspot.com/-WRVMxXn7gJg/YQP2AJK2zOI/AAAAAAAACD0/0MVArLtw9_89z_yBD6k8PCm9SGHd-cQYwCLcBGAsYHQ/s750/1.jpg',
        'https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg',
        'https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg',
        'https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg',
      ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <View style={{flex:10}}> 
                    <Text style={styles.headerTitle}>Kết nối QR</Text>
                </View>
                <View style={{flex:1}}>
                    
                </View>
            </View>

        <Text style={styles.notifyTitle}>
            Hướng dẫn sử dụng cho người mới
        </Text>

        <View style={styles.flexRow}>
            
            <View style={{flex:8 ,paddingRight:20}}>
                <Text style={styles.notifySubTitle}>
                    Today | 5:00 PM
                </Text>
            </View>
            <View style={{flex:3,alignItems:'flex-end',justifyContent:'center'}}>
                <View style={styles.notifyTime}>
                    <Text style={styles.notifyTimeContent}><FontAwesomeIcon color='#7D8592' icon={faClock}/>   3p</Text>
                </View>
            </View>
        </View>

        <View style={styles.flexRow}>
            <View style={{flex:1,justifyContent:'flex-start'}}>
                <Text style={styles.notifySubTitle}>Trưởng nhóm</Text>
                <View style={[styles.flexRow,styles.leader]}>
                    <Avatar link={'https://i.pinimg.com/1200x/f7/20/97/f720978ed61e6366ab03033a8ad88e05.jpg'}/>
                    <Text style={styles.leaderName}>Sami Rafi</Text>


                </View>

            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <Text style={styles.notifySubTitle}>Người được mời</Text>
                <ListAvt links={avtLink}/>
            </View>
            
        </View>

        <View style={styles.groupContainer}>
            <View style={styles.group}>
                <Text style={styles.notifySubTitle}>Link mời vào đội</Text>
                <TouchableOpacity><Text style={styles.link}>https://meet.google.com/jwc-ciro-dip</Text></TouchableOpacity>
            </View>
            <View style={styles.group}>
                <Text style={styles.notifySubTitle}>Liên kết bán hàng</Text>
                <TouchableOpacity><Text style={styles.link}>https://meet.google.com/jwc-ciro-dip</Text></TouchableOpacity>
            </View>
            <View style={styles.qrContainer}>
                <Image
                    width={200}
                    height={200}  
                    source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/moviestreaming-a0fc2.appspot.com/o/pictures%2F2400def636789726ce69.jpg?alt=media&token=3704644f-39c4-481b-a7c2-1fbcf594e169' }}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button title={'Thiết lập nhắc nhở'} borderRadius={10}/>
            </View>
        </View>
            
            
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
            paddingHorizontal:20,
            paddingRight:120,
            fontSize:24,
            fontWeight:'500',
        },
        notifySubTitle:{
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
        },
        leader:{
            marginTop:0,
            marginBottom:0,
            paddingHorizontal:0,
            justifyContent:'flex-start',
        },
        leaderName:{
            paddingLeft:20,
            fontSize:18,
            fontWeight:'500'
        },
        groupContainer:{
            padding:20,
        },
        group:{
            marginBottom:20
        },
        link:{
            color:'#3F8CFF',
            fontSize:18,
            marginTop:5
        },
        qrContainer:{
            alignItems:'center',
            marginBottom:20
        },
        buttonContainer:{
            paddingHorizontal:30
        }
        
    });