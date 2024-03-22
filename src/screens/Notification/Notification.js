import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {hp, wp} from '../../utils/Dimensions';
import TextButton from '../../components/TextButton';
import NotificationModal from '../../components/NotificationModal/NotificationModal';

const NotificationScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    navigation.navigate('SignIn');
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        showLabel={true}
        source={require('../../assets/images/crossIcon.png')}
        backgroundColor={Colors.mainBlue}
        onPress={() => console.log('CrossPressed')}
        label={'easycharter.com'}
        labelText={{color: Colors.white}}
        height={hp(11)}
      />
      <View style={styles.mg5}>
        <Text style={styles.texth1}>Please turn on</Text>
        <Text style={styles.texth1}>notifications</Text>
        <Space height={hp(2)} />
        <Text style={styles.texth2}>
          App notifications keep you up to date with changes you make to your
          booking. We'll sometimes let you know of deals and rewards as well.
        </Text>
        <Space height={hp(50)} />
        <TextButton
          title="OK"
          style={{width: wp(90), height: hp(6)}}
          isOutline={true}
          onPress={openModal}
        />
        <NotificationModal
          modalVisible={modalVisible}
          closeModal={closeModal}
        />
      </View>
    </View>
  );
};

export default NotificationScreen;
