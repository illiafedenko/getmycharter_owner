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
import {useNavigation} from '@react-navigation/native';

const ManageListings = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState('Sort by');

  const handleSortOptionPress = option => {
    setSelectedSortOption(option);
    setShowSortOptions(false);
    // You can perform any actions based on the selected sort option here
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Manage Listings'}
        showLabel
        showImg={false}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => console.log('CrossPressed')}
      />
      <View style={styles.paddingView}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <View style={styles.searchInput}>
              <Image
                source={require('../../assets/images/search.png')}
                style={[styles.searchIcon, {marginRight: 10}]}
                resizeMode="contain"
              />
              <TextInput
                style={{width: '80%', height: 40, color: 'black'}}
                placeholder="Search"
                placeholderTextColor={'grey'}
                value={searchQuery}
                onChangeText={text => setSearchQuery(text)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.addListingButton}
            onPress={() => navigation.navigate('Add yacht')}>
            <View style={styles.centerView}>
              <Text style={styles.addListingText}>Add Listing</Text>

              <Image
                source={require('../../assets/images/plus.png')}
                style={styles.searchIcon} // Reusing the searchIcon style for simplicity
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.sortContainer}>
          <Text style={styles.listingsText}>Listings</Text>

          <View style={styles.emtpy} />
          <TouchableOpacity
            onPress={() => console.log('Select All pressed')}
            style={styles.btnView}>
            <Image
              source={require('../../assets/images/selecall.png')}
              style={[styles.iconstyle, {right: 5}]}
              resizeMode="contain"
            />
            <Text style={styles.sortButton}>Select All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowSortOptions(!showSortOptions)}
            style={styles.btnView}>
            <Text style={styles.sortButton}>{selectedSortOption}</Text>
            <Image
              source={require('../../assets/images/down.png')}
              style={[styles.iconstyle, {left: 5}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {showSortOptions && (
          <View style={styles.sortOptionsContainer}>
            <TouchableOpacity onPress={() => handleSortOptionPress('Newest')}>
              <Text style={styles.sortOption}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSortOptionPress('Oldest')}>
              <Text style={styles.sortOption}>Oldest</Text>
            </TouchableOpacity>
          </View>
        )}
        <ScrollView showsVerticalScrollIndicator={false}>
          <YachatCard
            searchQuery={searchQuery}
            selectedSortOption={selectedSortOption}
          />
          <Space height={80} />
        </ScrollView>
      </View>
    </View>
  );
};

export default ManageListings;
