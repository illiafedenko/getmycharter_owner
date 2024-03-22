import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {styles} from './styles';
import Space from '../../components/Space';
import Savebtn from '../../components/Savebtn/Savebtn';
import Toast from 'react-native-simple-toast';

import {useNavigation} from '@react-navigation/native';
import MultiSelectDropdown from '../../components/MultiSelectDropdown/MultiSelectDropdown';
import {IteminYacht} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';

const Equipment = ({route}) => {
  const dispatch = useDispatch();
  const {yachtId} = route.params;
  const navigation = useNavigation();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    'Bimini',
    'Outdoor shower',
    'External table',
    'External speakers',
    'Teak deck',
    'Bow sundeck',
    'Aft sundeck',
    'Bathing platform',
    'Bathing ladder',
  ]; // Replace with your options
  const optionsNav = [
    'Dinghy',
    'Dinghys motor',
    'Bow thruster',
    'External speakers',
    'Electric windlass',
    'Autopilot',
    'GPS',
    'Depth sounder',
    'VHF',
    'Satellite phone',
    'Guides & maps',
  ];

  const optionsWat = [
    'Water skis',
    'Monoski',
    'Wakeboard',
    'Towable Tube',
    'Inflatable banana',
    'Kneeboard',
  ];

  const optionsExtra = [
    'Hot water',
    'Watermaker',
    'Air conditioniong',
    'Fans',
    'Heating',
    'Electric toilet',
    'Bed linen',
    'Bath towels',
    'Beach towels',
    'Wi-Fi',
    'USB socket',
    'TV',
  ];
  const optionsLes = [
    'Paddle board',
    'Kayak',
    'Snorkelling equipment',
    'Fishing equipment',
    'Seabob',
    'Bike',
    'Electric scooter',
    'Drone',
    'Video camera',
  ];
  const optionsKitchen = [
    'Fridge',
    'Freezer',
    'Oven/Stovetop',
    'BBQ girll',
    'Microwave',
    'Ice machine',
    'Ice box',
  ];
  const optionsonBoardEnergy = [
    'Generator',
    'Powerful inverter',
    '220V power outlet',
  ];

  const handleSave = async () => {
    if (selectedOptions.length === 0) {
      Toast.show('Please select at least one option.');
      return;
    }

    const equipmentData = {
      yatchId: yachtId,
      progress: '100',
      equipments_outdoor: [],
      equipments_navigation: [],
      equipments_kitchen: [],
      equipments_onboard_energy: [],
      equipments_water_sports: [],
      equipments_leisure_activities: [],
      equipments_extra_comforts: [],
    };

    selectedOptions.forEach(option => {
      if (options.includes(option)) {
        equipmentData.equipments_outdoor.push(option);
      } else if (optionsNav.includes(option)) {
        equipmentData.equipments_navigation.push(option);
      } else if (optionsKitchen.includes(option)) {
        equipmentData.equipments_kitchen.push(option);
      } else if (optionsonBoardEnergy.includes(option)) {
        equipmentData.equipments_onboard_energy.push(option);
      } else if (optionsWat.includes(option)) {
        equipmentData.equipments_water_sports.push(option);
      } else if (optionsLes.includes(option)) {
        equipmentData.equipments_leisure_activities.push(option);
      } else if (optionsExtra.includes(option)) {
        equipmentData.equipments_extra_comforts.push(option);
      }
    });

    try {
      dispatch(setLoading(true));

      const response = await IteminYacht(equipmentData);

      if (response && response.status === 201) {
        dispatch(setLoading(false));
        Toast.show('Your Yacht is Live!!');
        console.log('response from equipments', response?.data?.yatch?._id);
        // Redirect or perform other actions on success
        navigation.replace('BottomTab');
      } else {
        // Handle API error
        // You can check response.data for more details on the error
        dispatch(setLoading(false));
        Toast.show('Error submitting Photos. Please try again.');
      }
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        label={'Equipment'}
        elevation={5}
        showLabel={true}
        showImg={false}
      />
      <View style={styles.mainCon}>
        <Space height={'5%'} />
        <ScrollView>
          <MultiSelectDropdown
            label="Outdoor equipment"
            options={options}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />
          <MultiSelectDropdown
            label="Navigation equipment"
            options={optionsNav}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />
          <MultiSelectDropdown
            label="Water sports"
            options={optionsWat}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />

          <MultiSelectDropdown
            label="Extra comforts"
            options={optionsExtra}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />

          <MultiSelectDropdown
            label="Leisure activities"
            options={optionsLes}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />

          <MultiSelectDropdown
            label="Kitchen"
            options={optionsKitchen}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />

          <MultiSelectDropdown
            label="Onboard Energy"
            options={optionsonBoardEnergy}
            selectedItems={selectedOptions}
            onSelect={item => {
              const newSelectedOptions = selectedOptions.includes(item)
                ? selectedOptions.filter(selectedItem => selectedItem !== item)
                : [...selectedOptions, item];
              setSelectedOptions(newSelectedOptions);
            }}
          />
          <Space height={'40%'} />
        </ScrollView>
        <Savebtn onPress={handleSave} label={'Save'} />
      </View>
    </View>
  );
};

export default Equipment;
