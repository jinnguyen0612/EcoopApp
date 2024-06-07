import { faClock, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export function AffiliateItem({color,title,dateFrom,dateTo,money,image,user,onpress}){
    return (
      <TouchableOpacity style={styles.flexRow} onPress={onpress}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: color,
              height: 140,
              width: 4,
              borderRadius: 50,
            }}
          ></View>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: -20,
            marginRight: 8,
          }}
        >
          <View style={styles.affiliateImage}>
            <Image style={styles.avt} source={{ uri: image }} />
          </View>
        </View>
        <View style={{ flex: 8, flexDirection: "column", paddingVertical: 6 }}>
          <Text style={styles.affiliateTitle}>{title}</Text>
          <Text style={styles.affiliatePrice}>{money}/đơn</Text>
          <Text style={styles.affiliateSubTitle}>
            Từ {dateFrom} đến {dateTo}
          </Text>
          <Text style={styles.affiliateUser}>
            <FontAwesomeIcon icon={faUserGroup} color="#9795A4" /> {user}
          </Text>
        </View>
      </TouchableOpacity>
    );
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
    avt: {
        height: 100,
        width: 100,
        overflow: "hidden",
    },
    affiliateTitle:{
        paddingTop:4,
        fontSize:20,
        fontWeight:'600',
        alignItems:'flex-start'
    },
    affiliateSubTitle:{
        fontSize:12,
        color:'#9795A4',
        alignItems:'center',
        marginTop:4,
    },
    affiliateUser:{
        fontSize:14,
        color:'#9795A4',
        alignItems:'center',
        fontWeight:'400',
        marginTop:4,

    },
    affiliatePrice:{
        color:'#FF5400',
        fontSize:20,
        fontWeight:'bold',
        alignItems:'flex-start',
        marginTop:2,

    },
    
})