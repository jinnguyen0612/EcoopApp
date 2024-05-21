import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export function SideBar({ navigation,onClose }) {
    return (
        <>
            <TouchableOpacity style={styles.background} onPress={onClose}>
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.avt} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSrHTF4m60XB-kU3nhuGEfBxNjTwrmDO2tHpTdabG6Ww&s' }} />
                    <Text style={styles.menuTitle}>Phan Đăng Khoa</Text>
                    <Text style={styles.menuSubTitle}>Cộng tác viên</Text>

                </View>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                        <Text style={styles.menuItem}>Chỉnh sửa hồ sơ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                        <Text style={styles.menuItem}>Affiliate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Collaborator')}>
                        <Text style={styles.menuItem}>Đội của tôi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('EventDetails')}>
                        <Text style={styles.menuItem}>Kết nối QR</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.bottomMenu}>
                    <TouchableOpacity>
                        <Text style={styles.bottomMenuItem}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'absolute',
        zIndex: 2,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    container: {
        position: 'absolute',
        zIndex: 3,
        width: 260,
        height: Dimensions.get('screen').height,
        backgroundColor: '#FF5400',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    avt: {
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
    },
    menuTitle:{
        fontSize: 24,
        marginTop:10,
        marginBottom:4,
        color:'white',
        fontWeight:'bold'
    },
    menuSubTitle:{
        fontSize: 18,
        color:'white',
        marginVertical: 2,
    },
    menu: {
        marginTop: 40,
        paddingHorizontal: 20,
    },
    menuItem: {
        fontSize: 18,
        marginVertical: 10,
        color: '#FFF',
    },
    bottomMenu: {
        marginTop: 60,
        paddingHorizontal: 20,
        alignItems:'center'
    },
    bottomMenuItem: {
        fontSize: 20,
        marginVertical: 10,
        color: '#FFF',
        borderBottomWidth:1,
        borderColor:'white'
    },
});