import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Button } from '../components/Button';

const CELL_COUNT = 6;


export default function VerifyCode({ navigation }) {

    const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (

    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.titleForm}>Nhập mã xác nhận</Text>
        <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            testID="my-code-input"
            renderCell={({index, symbol, isFocused}) => (
            <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor/> : null)}
            </Text>
        )}
        />
        <View style={{marginTop:25}}>
            <Button title={'Xác nhận'}/>
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
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 42,
      height: 42,
      lineHeight: 40,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      borderRadius:10,
      fontWeight:'bold'
    },
    focusCell: {
      borderColor: '#000',
    },
  });