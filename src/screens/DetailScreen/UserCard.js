import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import {useNavigation} from '@react-navigation/native';

const UserCard = ({user}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://monacolife.net/wp-content/uploads/2023/10/yct-006-aspect16x9-653bb0463a4ef.webp',
        }}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.username}>Owner</Text>
        <Text style={styles.contact}>090078601</Text>
      </View>
      <TouchableOpacity
        style={styles.messageButton}
        onPress={() => navigation.navigate('Messages')}>
        <Image
          source={require('../../assets/images/addMsg.png')}
          style={{height: 15, width: 15}}
        />
        <Text style={styles.messageText}>Direct Message</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginRight: 40,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
  contact: {
    fontSize: 14,
    color: 'gray',
  },
  messageButton: {
    backgroundColor: Colors.mainBlue,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messageText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default UserCard;
