import {View, ScrollView, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useDispatch} from 'react-redux';
import NavigationComponent from './NavigationComponent';

const SettingScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Settings'}
        showLabel
        showImg={false}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => console.log('CrossPressed')}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Space height={10} />
        <NavigationComponent />
        <Space height={80} />
      </ScrollView>
    </View>
  );
};

export default SettingScreen;
