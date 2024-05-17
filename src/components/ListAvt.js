import { Text, SafeAreaView, StyleSheet, View, Image } from 'react-native';

export function ListAvt({links}) {
  return (
    <SafeAreaView style={styles.container}>
      <AvatarList links={links}/>
    </SafeAreaView>
  );
}

export const Avatar = ({ link, number }) => {
  return (
    <View style={styles.avatarContainer}>
      {link ? (
        <Image style={styles.avatar} source={{ uri: link }} />
      ) : (
        <View style={[styles.avatar, styles.avatarNumber]}>
          <Text style={styles.number}>{number}</Text>
        </View>
      )}
    </View>
  );
};

const AvatarList = ({ links }) => {
  return (
    <View style={styles.avatarList}>
      {Array.isArray(links) && links.length > 0 ? (
        <>
          {links.slice(0, 3).map((link, index) => (
            <Avatar key={index} link={link} />
          ))}
          {links.length > 3 && (
            <Avatar link={null} number={`+${links.length - 3}`} />
          )}
        </>
      ) : (
        <Avatar number={0} />
      )}
    </View>
  );
};


const styles = StyleSheet.create({

  avatarList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: -10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarNumber: {
    backgroundColor: '#3F8CFF',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white',
  },
});

export default ListAvt;
