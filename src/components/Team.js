import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Team({ avt,email, name, position="Cộng tác viên", numMember, onPress=null }) {

    const getInitial = (name) => {
        const words = name.trim().split(" ");
        const lastName = words[words.length - 1];
        return lastName ? lastName.charAt(0).toUpperCase() : "";
      };

      function maskPhoneNumber(phoneNumber) {
        const firstTwo = phoneNumber.slice(0, 2);
        const lastTwo = phoneNumber.slice(-3);
      
        return `${firstTwo}xxxxx${lastTwo}`;
      }

      return (
        onPress ? (
          <TouchableOpacity onPress={onPress} style={[styles.teamContainer, styles.shadowProp]}>
            <View style={styles.flexRow}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                {avt ? (
                  <View style={styles.avtContainer}>
                    <Image style={styles.avt} source={{ uri: avt }} />
                  </View>
                ) : (
                  <View style={styles.placeholder}>
                    <Text style={styles.initial}>
                      {getInitial(name)}
                    </Text>
                  </View>
                )}
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.teamName}>{name}</Text>
                {/* <Text style={styles.teamEmail}>{email}</Text> */}
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {/* <FontAwesomeIcon size={20} icon={faEllipsisVertical} /> */}
              </View>
            </View>
            <View style={[styles.flexRow, { marginTop: 24 }]}>
              {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={styles.label}>Giới tính</Text>
                <Text style={styles.content}>{sex}</Text>
              </View> */}
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                <Text style={styles.label}>Chức vụ</Text>
                <Text style={styles.content}>{position}</Text>
              </View>
              {(numMember !== undefined && numMember !== null) && (
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Text style={styles.label}>Thành viên trong đội</Text>
                  <Text style={styles.content}>{numMember}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ) : (
          <View style={[styles.teamContainer, styles.shadowProp]}>
            <View style={styles.flexRow}>
              <View style={{ flex: 3, justifyContent: 'center' }}>
                {avt ? (
                  <View style={styles.avtContainer}>
                    <Image style={styles.avt} source={{ uri: avt }} />
                  </View>
                ) : (
                  <View style={styles.placeholder}>
                    <Text style={styles.initial}>
                      {getInitial(name)}
                    </Text>
                  </View>
                )}
              </View>
              <View style={{ flex: 8 }}>
                <Text style={styles.teamName}>{name}</Text>
                <Text style={styles.teamEmail}>{email}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {/* <FontAwesomeIcon size={20} icon={faEllipsisVertical} /> */}
              </View>
            </View>
            <View style={[styles.flexRow, { marginTop: 24 }]}>
              {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={styles.label}>Giới tính</Text>
                <Text style={styles.content}>{sex}</Text>
              </View> */}
              <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                <Text style={styles.label}>Chức vụ</Text>
                <Text style={styles.content}>{position}</Text>
              </View>
              {(numMember !== undefined && numMember !== null) && (
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Text style={styles.label}>Số điện thoại</Text>
                  <Text style={styles.content}>{maskPhoneNumber(numMember)}</Text>
                </View>
              )}
            </View>
          </View>
        )
      );
      
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Thêm thuộc tính elevation để áp dụng shadow trên Android
    },
    teamContainer: {
        marginTop: 14,
        marginBottom: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:30
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    avtContainer: {
        width: 62,
        height: 62,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avt: {
        height: 60,
        width: 60,
        borderRadius: 100,
        overflow: 'hidden',
    },
    teamName: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    orderMoney: {
        fontSize: 18,
        color: '#22e639'
    },
    teamEmail: {
        fontSize: 14,
        color: 'grey'
    },
    label: {
        color: 'grey',
        marginBottom: 5
    },
    content: {
        fontSize: 18,
        fontWeight: '500'
    },
    placeholder: {
        height: 60,
        width: 60,
        borderRadius: 40,
        backgroundColor: "#3F8CFF", // Đổi màu nền khác trắng, ví dụ: màu xanh dương
        alignItems: "center",
        justifyContent: "center",
      },
      initial: {
        fontSize: 32,
        color: "#fff",
      },
});
