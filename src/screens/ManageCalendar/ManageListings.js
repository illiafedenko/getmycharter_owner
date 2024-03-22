import {View, ScrollView, BackHandler, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useDispatch, useSelector} from 'react-redux';
import YachatCard from '../Yanchts/YachatCard';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {Text} from 'react-native';
import ManageCard from './ManageCard';

const ManageCalendar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Sort by');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSortOptionPress = option => {
    setSelectedSortOption(option);
    setShowSortOptions(false);
    // You can perform any actions based on the selected sort option here
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Manage Calendar'}
        showLabel
        showImg={false}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => console.log('CrossPressed')}
      />
      <Space height={15} />
      <View style={styles.paddingView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ManageCard
            searchQuery={searchQuery}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Space height={80} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ManageCalendar;
