import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import YahatCard from './YachatCard';
import Space from '../../components/Space';

const YachtScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        label={'My Yachts'}
        styleIcon={{width: wp(3), height: hp(5)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={false}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          navigation.navigate('NewYanct');
        }}>
        <Text style={styles.addButtonText}>New Yachts</Text>
      </TouchableOpacity>
      <YahatCard />
      <Space height={80} />
    </View>
  );
};

export default YachtScreen;
