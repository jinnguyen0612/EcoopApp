import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Button} from '../components/Button';
import {InputPassword, InputPhone, InputText} from '../components/Input';

export default function ForgotPassword({ navigation }) {

  const [referralPhone, setReferralPhone] = useState("");




  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>

        <Text style={styles.titleForm}>Quên mật khẩu</Text>

        <View style={styles.formContainer}>
            <InputText
                label={'Nhập email hoặc số điện thoại của bạn'}
                />
            <View style={{marginTop:30}}>
                <Button title={'Gửi mã'}/>
            </View>
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

  logoContainer:{
    marginTop:80,
    marginBottom:40,
    alignItems:'center'
  },

  loginContainer:{
    marginTop:30,
    marginBottom:20
  },

  titleForm:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center'
  },

  formContainer:{
    marginTop:18,
    marginBottom:10,
    marginHorizontal:46
  },


});
