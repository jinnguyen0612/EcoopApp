import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { InputPhone, InputText } from '../components/Input';
import { Button } from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Profile(){
    const [name, setName] = useState("Phan Đăng Khoa");
    const [email, setEmail] = useState("p.khoa90@gmail.com");
    const [phone, setPhone] = useState("0707072708");
    const [position, setPosition] = useState("Cộng tác viên");
    const [avt, setAvt] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrHTF4m60XB-kU3nhuGEfBxNjTwrmDO2tHpTdabG6Ww&s");



    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <View style={{flex:10}}> 
                    <Text style={styles.headerTitle}>Chỉnh sửa hồ sơ</Text>
                </View>
                <View style={{flex:1}}>
                </View>
            </View>

            <View style={styles.bioContainer}>
                <TouchableOpacity style={{borderWidth:1,borderColor:'black',borderRadius:100}}>
                    <Image style={styles.avt} source={{uri: avt}} />
                </TouchableOpacity>
                <Text style={styles.bioName}>{name}</Text>
                <Text style={styles.bioPosition}>{position}</Text>
            </View>

            <View style={styles.formContainer}>
                <InputText
                    label={'Tên'}
                    data={name}
                    setData={setName}/>
                <InputText
                    label={'Email'}
                    data={email}
                    setData={setEmail}/>
                <InputPhone
                    label={'Số diện thoại'}
                    data={phone}
                    setData={setPhone}/>
                <InputText
                    label={'Chức vụ'}
                    data={position}
                    setData={setPosition}/>
                
                <View style={{marginTop:25}}>
                    <Button title={'Chỉnh sửa'}/>
                </View>
            </View>
            
            
          <StatusBar style="auto" />
        </KeyboardAwareScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      
        container: {
            backgroundColor: '#fff',
      },
        header:{
            marginTop:60,
            paddingHorizontal:20,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
      },
        headerTitle:{
            fontSize:20,
            textAlign:'center'
      },
        bioContainer:{
            alignItems:'center',
            marginTop:30,
        },
        avt:{
            height:80,
            width:80,
            borderRadius:100,
            overflow: 'hidden',
        },
        bioName:{
            marginTop:2,
            fontSize:30,
            fontWeight:'bold',
        },
        bioPosition:{
            marginTop:2,
            fontSize:16,
            color:'grey'
        },
        formContainer:{
            marginTop:18,
            marginBottom:10,
            marginHorizontal:46
        },
        
    });