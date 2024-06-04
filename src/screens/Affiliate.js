import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { faAdd, faArrowLeft, faBlackboard } from '@fortawesome/free-solid-svg-icons';
import { InputPhone, InputText } from '../components/Input';
import { Button } from '../components/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Team} from "../components/Team";
import { AffiliateItem } from '../components/AffiliateItem';

export default function Affiliate({ navigation }){

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{flex:1}} onPress={()=>navigation.goBack()}>
                    <FontAwesomeIcon size={20} icon={faArrowLeft}/>
                </TouchableOpacity>
                <View style={{flex:10}}> 
                    <Text style={styles.headerTitle}>Danh sách chiến dịch</Text>
                </View>
                <View style={{flex:1}}>
                    
                </View>
            </View>

            <ScrollView>
              <AffiliateItem
                color={'red'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              <AffiliateItem
                color={'blue'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              <AffiliateItem
                color={'yellow'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              <AffiliateItem
                color={'grey'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              <AffiliateItem
                color={'green'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              <AffiliateItem
                color={'pink'}
                title={'Presentation of the new app launch'}
                money={2000}
                dateFrom={'04/06/2024'}
                dateTo={'11/06/2024'}
                user={'2000'}
                image={'https://product.hstatic.net/1000391653/product/sg-11134201-22100-pbb60xlsoyiv83_b03f99832ccb4c5ab93ddac6a127de67_1024x1024.jpg'}/>

              
              <View style={{height:160}}></View>
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
        
    });