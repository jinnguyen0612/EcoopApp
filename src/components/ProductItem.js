import { faClock, faCopy, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Linking } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';


export function ProductItem({color,product,link,image}){

  const openExternalLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Failed to open URL: ", err)
    );
  };

  const handlePressLink = (url) => {
    openExternalLink(url);
  };

  function copyToClipboard(text){
    // Clipboard.setString(text);
  };


    return (
      <View style={styles.flexRow}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: color,
              height: 110,
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
          <Text style={styles.affiliateTitle}>{product}</Text>
          <View style={styles.linkContainer}>
            <TouchableOpacity style={styles.linkFlex} onPress={()=>handlePressLink(link)}>
              <Text style={styles.affiliatePrice}>{link}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.copyFlex} onPress={()=>copyToClipboard(link)}>
              <FontAwesomeIcon icon={faCopy} size={24} color="#3F8CFF"/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    affiliatePrice:{
        color:'#FF5400',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'flex-end',
        marginTop:5,

    },
    linkContainer:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    linkFlex:{
      flex:10,
    },
    copyFlex:{
      flex:1,
      padding:10,
      alignItems:"center",
    },
    
})