import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {Button} from '../components/Button';
import {InputPassword, InputText} from '../components/Input';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordHide, setPasswordHide] = useState(true);



  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>

        <Text style={styles.titleForm}>Đăng Nhập</Text>

        <View style={styles.formContainer}>
          <InputText 
          label={'Email hoặc số điện thoại của bạn'}
          data={email}
          setData={setEmail}/>
          
          <InputPassword
            label={'Mật khẩu'}
            data={password}
            setData={setPassword}
            eyeStatus={passwordHide}
            setEyeStatus={()=>setPasswordHide(!passwordHide)}/>

          <TouchableOpacity style={{marginTop:30,marginBottom:30}}>
            <Text style={[styles.label,{textAlign:'right'}]}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <Button title={'Đăng nhập'}/>
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
