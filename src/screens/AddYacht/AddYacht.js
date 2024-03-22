import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';

import Space from '../../components/Space';
import CustomInput from '../../components/CustomInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import YachtTypeSelector from './YachtTypeSelector';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import fonts from '../../assets/fonts';
import Savebtn from '../../components/Savebtn/Savebtn';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Constants from '../../Services/constants';
import Toast from 'react-native-simple-toast';
import {createYachtStep1} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';

const AddYacht = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedYachtType, setSelectedYachtType] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedHarbour, setSelectedHarbour] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedWithSkipper, setSelectedWithSkipper] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [onboardCapacity, setOnboardCapacity] = useState('');
  const [numberOfCabins, setNumberOfCabins] = useState('');
  const [numberOfBerths, setNumberOfBerths] = useState('');
  const [numberOfWashrooms, setNumberOfWashrooms] = useState('');
  const [length, setLength] = useState('');
  const [speed, setSpeed] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const yachtTypeOptions = [
    {label: 'Yacht', value: 'Yacht'},
    {label: 'Jet Ski', value: 'Jet Ski'},
    {label: 'Motorboat', value: 'Motorboat'},
    {label: 'Sailboat', value: 'Sailboat'},
    {label: 'Catamaran', value: 'Catamaran'},
    {label: 'RIB', value: 'RIB'},
    //  {label: 'Houseboat', value: 'Houseboat'},
  ];
  const harbourOptions = [
    //  {label: 'Marina Del Rey', value: 'Marina Del Rey'},
    //  {label: 'Long Beach', value: 'Long Beach'},
    //  {label: 'Newport Harbor', value: 'Newport Harbor'},
    //  {label: 'Miami Beach Marina', value: 'Miami Beach Marina'},
    //  {label: 'Sydney Harbour', value: 'Sydney Harbour'},
    // {label: 'Portofino Harbour', value: 'Portofino Harbour'},
    // {label: 'Monaco Port Hercules', value: 'Monaco Port Hercules'},
    {label: 'Dubai Marina', value: 'Dubai Marina'},
    //  {label: 'Hong Kong Victoria Harbour', value: 'Hong Kong Victoria Harbour'},
    // Add more harbour options as needed
  ];

  const manufacturerOptions = [
    {label: 'Beneteau', value: 'Beneteau'},
    {label: 'Jeanneau', value: 'Jeanneau'},
    {label: 'Bavaria Yachts', value: 'Bavaria Yachts'},
    {label: 'Lagoon', value: 'Lagoon'},
    {label: 'Hanse Yachts', value: 'Hanse Yachts'},
    {label: 'Sunseeker', value: 'Sunseeker'},
    {label: 'Azimut Yachts', value: 'Azimut Yachts'},
    {label: 'Sea Ray', value: 'Sea Ray'},
    {label: 'Yamaha', value: 'Yamaha'},
    {label: 'Kawasaki', value: 'Kawasaki'},
    // Add more manufacturer options as needed
  ];

  const modelOptions = [
    {label: 'Oceanis 45', value: 'Oceanis 45'},
    {label: 'Sun Odyssey 349', value: 'Sun Odyssey 349'},
    {label: 'Bavaria Cruiser 46', value: 'Bavaria Cruiser 46'},
    {label: 'Lagoon 450', value: 'Lagoon 450'},
    {label: 'Hanse 388', value: 'Hanse 388'},
    // Add more model options as needed
  ];

  const withSkipperOptions = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
    // Add more with skipper options as needed
  ];

  const validateForm = () => {
    // Implement your validation logic here
    // Return true if the form is valid, otherwise false

    const emptyFields = [];

    if (!title) emptyFields.push('Title');
    if (!description) emptyFields.push('Description');
    if (!selectedYachtType) emptyFields.push('Yacht Type');
    if (!selectedManufacturer) emptyFields.push('Manufacturer');
    if (!selectedModel) emptyFields.push('Model');
    if (!selectedHarbour) emptyFields.push('Harbour');
    if (!onboardCapacity) emptyFields.push('Onboard Capacity');
    if (!numberOfCabins) emptyFields.push('Number of Cabins');
    if (!numberOfBerths) emptyFields.push('Number of Berths');
    if (!numberOfWashrooms) emptyFields.push('Number of Washrooms');
    if (!length) emptyFields.push('Length');
    if (!speed) emptyFields.push('Speed');
    if (!latitude) emptyFields.push('Latitude');
    if (!longitude) emptyFields.push('Longitude');

    if (emptyFields.length > 0) {
      // Show toast message for validation error with field names
      Toast.show(
        `Please fill in the following fields: ${emptyFields.join(', ')}`,
      );
      return false;
    }

    // Add more validation logic as needed

    return true;
  };

  const validateAndSubmit = () => {
    if (validateForm()) {
      submitFormData();
    }
  };

  const submitFormData = async () => {
    try {
      dispatch(setLoading(true));
      const requestBody = {
        title,
        description,
        type_specs: selectedYachtType || '',
        made_by_specs: selectedManufacturer || '',
        model_specs: selectedModel || '',
        harbour: selectedHarbour || '',
        psngr_capacity_specs: onboardCapacity,
        no_of_cabins: numberOfCabins,
        no_of_berths: numberOfBerths,
        no_of_washrooms: numberOfWashrooms,
        city: selectedCity,
        length,
        speed,
        latitude,
        longitude,
        progress: '20',
      };
      const response = await createYachtStep1(requestBody);

      // console.log('yacht id form addyahct:', response?.data?.yatch?._id);

      if (response && response.status === 201) {
        dispatch(setLoading(false));
        Toast.show('Successfully created, Add more information!');
        console.log('okokok');
        // Redirect or perform other actions on success
        navigation.replace('Addphotos', {yachtId: response?.data?.yatch?._id});
      } else {
        // Handle API error
        // You can check response.data for more details on the error
        dispatch(setLoading(false));

        Toast.show('Error submitting form. Please try again.');
      }
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      style={{flex: 1}}>
      <View style={styles.containerMain}>
        <CustomHeader
          backgroundColor={Colors.white}
          label={'Add Yacht'}
          styleIcon={{width: wp(3), height: hp(5)}}
          elevation={5}
          showLabel={true}
          showImg={false}
        />
        <Space height={15} />
        <View style={styles.container}>
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Title'}
            labelStyle={{fontSize: 15}}
            placeholder={'E.g. Fountaine Pajot Bahia 46'}
            onChangeText={text => {
              setTitle(text);
            }}
          />

          <CustomInput
            label={'Description'}
            placeholder={
              'The length and quality of your description impacts  the positioning of your listing in the search  results.'
            }
            customStyle={[
              styles.customInput,
              {
                height: 198,
                borderRadius: 3,
                ...Platform.select({android: {textAlignVertical: 'top'}}),
              },
            ]}
            labelStyle={{fontSize: 15}}
            multiline={true}
            onChangeText={text => {
              setDescription(text);
            }}
          />

          <YachtTypeSelector
            yachtTypeOptions={yachtTypeOptions}
            onSelectYachtType={type => setSelectedYachtType(type)}
          />
          {/* <CustomDropdown
            label="City"
            options={cityOptions}
            selectedValue={selectedCity}
            onSelect={value => setSelectedCity(value)}
          /> */}

          <Text style={[styles.label]}>City</Text>

          <GooglePlacesAutocomplete
            placeholder="Search & Select the city"
            listViewDisplayed={false}
            textInputProps={{
              placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
              returnKeyType: 'search',
            }}
            onPress={(data, details = null) => {
              const addressData = {
                description: data?.description,
                latitude: details?.geometry?.location?.lat,
                longitude: details?.geometry?.location?.lng,
                city: data?.structured_formatting?.main_text,
              };
              console.log('Address Data', addressData);
              setLatitude(addressData.latitude);
              setLongitude(addressData.longitude);
              setSelectedCity(addressData.city);
            }}
            GooglePlacesDetailsQuery={{fields: 'geometry'}}
            fetchDetails={true}
            query={{
              key: Constants.API_KEY,
              language: 'en', // language of the results
            }}
            styles={{
              container: styles.autocompleteContainer,
              textInput: {
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderRadius: 8,
                height: 40,
                width: '100%',
                fontSize: 13,
                color: 'black',
                borderColor: '#CED4DA',
              },
              placeholderTextColor: 'black',
              description: {
                color: 'black', // Set the color of the suggestion text
              },
              placeholderTextColor: 'black',
            }}
            debounce={300}
          />
          <CustomDropdown
            label="Harbour"
            options={harbourOptions}
            selectedValue={selectedHarbour}
            onSelect={value => {
              console.log('harbour selected', value);
              setSelectedHarbour(value);
            }}
          />

          <CustomDropdown
            label="Manufacturer"
            options={manufacturerOptions}
            selectedValue={selectedManufacturer}
            onSelect={value => setSelectedManufacturer(value)}
          />

          <CustomDropdown
            label="Model"
            options={modelOptions}
            selectedValue={selectedModel}
            onSelect={value => setSelectedModel(value)}
          />
          <CustomInput
            customStyle={[styles.customInput]}
            label="With Skipper/Without Skipper"
            editable={false}
            value={'Yes'}
          />
          {/* <CustomDropdown
            label="With Skipper/Without Skipper"
            options={withSkipperOptions}
            selectedValue={selectedWithSkipper}
            onSelect={value => setSelectedWithSkipper(value)}
          /> */}
          <Text
            style={{
              fontSize: 16,
              fontFamily: fonts.semiInter,
              marginBottom: 20,
              color: 'black',
            }}>
            Capacity
          </Text>

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Onboard capacity'}
            placeholder={'E.g. 2'}
            onChangeText={text => {
              setOnboardCapacity(text);
            }}
            keyboardType="numeric"
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Number of cabins'}
            placeholder={'E.g. 2'}
            keyboardType="numeric"
            onChangeText={text => {
              setNumberOfCabins(text);
            }}
          />
          <CustomInput
            customStyle={[styles.customInput]}
            label={'Number of berths'}
            keyboardType="numeric"
            placeholder={'E.g. 3'}
            onChangeText={text => {
              setNumberOfBerths(text);
            }}
          />

          <CustomInput
            customStyle={[styles.customInput]}
            label={'Number of washrooms'}
            placeholder={'E.g. 5'}
            keyboardType="numeric"
            onChangeText={text => {
              setNumberOfWashrooms(text);
            }}
          />
          <View style={styles.inputRow}>
            <View>
              <Text style={styles.label}>Length</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  placeholder="E.g 6"
                  keyboardType="numeric"
                  value={length}
                  maxLength={8}
                  onChangeText={text => setLength(text)}
                />
                <View style={styles.unitView}>
                  <Text style={styles.unit}>ft</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.label}>Speed</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.input}
                  value={speed}
                  maxLength={8}
                  keyboardType="numeric"
                  onChangeText={text => setSpeed(text)}
                />
                <View style={styles.unitView}>
                  <Text style={styles.unit}>km/h</Text>
                </View>
              </View>
            </View>
          </View>
          <Savebtn
            onPress={validateAndSubmit}
            label={'Save'}
            customStyle={{marginBottom: 120}}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddYacht;
