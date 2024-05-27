import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {Button} from '../components/Button';
import {InputPassword, InputPhone, InputText} from '../components/Input';
import AuthContext from '../context/AuthProvider';
import DataStorage from '../utillity/DataStorage';

export default function Referral({ navigation }) {

  const [referralPhone, setReferralPhone] = useState("");
  const { setIsLogin,user } = useContext(AuthContext);
  
  const handleSkip = async () =>{
      setIsLogin(true)
  }

  const handleConfirm = async () =>{
    console.log(user);
  }


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.loginContainer}>

        <Text style={styles.titleForm}>Người giới thiệu</Text>

        <View style={styles.formContainer}>
            <InputPhone
                label={'Số điện thoại'}
                placeholder={'92xxxxx29'}
                data={referralPhone}
                setData={setReferralPhone}
                />
            <View style={{marginTop:20}}>
                <Button title={'Xác nhận'} onPress={handleConfirm}/>
            </View>
        </View>

        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.subLabel}>Bỏ qua</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    minHeight:Dimensions.get('screen').height,
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
  subLabel:{
    textAlign:'center',
    marginVertical:10,
    fontSize:16,
    fontWeight:'600',
    color:'#9795A4',
  }

});
