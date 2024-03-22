import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import MultiSelectDropdown from '../../components/MultiSelectDropdown/MultiSelectDropdown';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';
import Savebtn from '../../components/Savebtn/Savebtn';
import Checkbox from './Checkbox';
import {updateBoatingLevel} from '../../Services/Api';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../Store/General';
import Toast from 'react-native-simple-toast';
import {selectOwnerDetails} from '../../Store/Profile/userInfoSlice';

const BoatingInformation = () => {
  const ownerDetails = useSelector(selectOwnerDetails);
  console.log('ownerDetails from boating', ownerDetails);

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [yachtLicense, setYachtLicense] = useState({
    coastal: ownerDetails?.boating_exp_license === 'coastal',
    offshore: ownerDetails?.boating_exp_license === 'offshore',
    inland: ownerDetails?.boating_exp_license === 'inland',
  });
  const [otherOptions, setOtherOptions] = useState({
    radioOperator: ownerDetails?.boating_exp_other === 'radioOperator',
    professionalSkipper:
      ownerDetails?.boating_exp_other === 'professionalSkipper',
  });

  const [sailingExperience, setSailingExperience] = useState({
    charteredBoat: ownerDetails?.boating_exp_sailing === 'charteredBoat',
    boatOwner: ownerDetails?.boating_exp_sailing === 'boatOwner',
  });
  const [yourLevelOptions, setYourLevelOptions] = useState([
    {label: 'Beginner', value: 'Beginner'},
    {label: 'Intermediate', value: 'Intermediate'},
    {label: 'Advanced', value: 'Advanced'},
  ]);

  const [preferenceOptions, setPreferenceOptions] = useState([
    {label: 'Day Trip', value: 'Day Trip'},
    {label: 'Overnight Trip', value: 'Overnight Trip'},
    {label: 'Weekend Trip', value: 'Weekend Trip'},
  ]);

  const [selectedYourLevel, setSelectedYourLevel] = useState(
    ownerDetails?.boating_exp_level || null,
  );

  const [selectedPreference, setSelectedPreference] = useState(
    ownerDetails?.boating_exp_preference || null,
  );
  const [description, setDescription] = useState(
    ownerDetails?.boating_exp_description || '',
  );
  const handleYachtLicenseSelection = licenseType => {
    setYachtLicense({
      coastal: licenseType === 'coastal',
      offshore: licenseType === 'offshore',
      inland: licenseType === 'inland',
    });
  };

  const handleOtherOptionsSelection = optionType => {
    setOtherOptions({
      radioOperator: optionType === 'radioOperator',
      professionalSkipper: optionType === 'professionalSkipper',
    });
  };

  const handleSailingExperienceSelection = experienceType => {
    setSailingExperience({
      charteredBoat: experienceType === 'charteredBoat',
      boatOwner: experienceType === 'boatOwner',
    });
  };

  const handlebookingcall = async () => {
    try {
      if (!selectedYourLevel || !selectedPreference) {
        // Display an error toast message
        Toast.show('Please select Boating Experience Level and Preference');
        return;
      }
      dispatch(setLoading(true));

      const selectedYachtLicense = Object.keys(yachtLicense).find(
        key => yachtLicense[key],
      );

      const selectedOtherOptions = Object.keys(otherOptions).find(
        key => otherOptions[key],
      );

      if (
        !selectedYachtLicense &&
        !otherOptions.radioOperator &&
        !otherOptions.professionalSkipper
      ) {
        // Display an error toast message
        Toast.show('Please select at least one Yacht License or other option');
        return;
      }

      const selectedSailingExperience = Object.keys(sailingExperience).find(
        key => sailingExperience[key],
      );

      if (!selectedSailingExperience) {
        // Display an error toast message
        Toast.show('Please select Sailing Experience');
        return;
      }
      if (!description.trim()) {
        // Display an error toast message for empty description
        Toast.show(
          'Please provide a description of yourself and your experience',
        );
        return;
      }

      // Ensure that only strings are passed
      const result = await updateBoatingLevel({
        boating_exp_level: String(selectedYourLevel),
        boating_exp_preference: String(selectedPreference),
        boating_exp_description: String(description),
        boating_exp_license: String(selectedYachtLicense),
        boating_exp_other: String(selectedOtherOptions),
        boating_exp_sailing: String(selectedSailingExperience),
      });
      console.log('results', result);

      navigation.navigate('PaymentScreen');
    } catch (error) {
      console.log('Error publishing:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        label={'Manage Profile'}
        showLabel
        styleIcon={{width: 15, height: 15}}
        showImg={true}
        source={require('../../assets/images/bckIcon.png')}
        backgroundColor={Colors.white}
        elevation={5}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.paddingView}>
        <Text style={styles.h1Text}>Boating Experience Level</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomDropdown
            label="Your Level"
            options={yourLevelOptions}
            selectedValue={selectedYourLevel}
            onSelect={value => setSelectedYourLevel(value)}
          />
          <CustomDropdown
            label="You Prefer"
            options={preferenceOptions}
            selectedValue={selectedPreference}
            onSelect={value => setSelectedPreference(value)}
          />
          <Text style={[styles.h4, {marginVertical: 10}]}>Yacht License</Text>
          <Checkbox
            label="Coastal License"
            value={yachtLicense.coastal}
            onPress={() => handleYachtLicenseSelection('coastal')}
          />
          <Checkbox
            label="Offshore License"
            value={yachtLicense.offshore}
            onPress={() => handleYachtLicenseSelection('offshore')}
          />
          <Checkbox
            label="Inland License"
            value={yachtLicense.inland}
            onPress={() => handleYachtLicenseSelection('inland')}
          />

          <Text style={[styles.h4, {marginVertical: 10}]}>Other</Text>
          <Checkbox
            label="Radio Operator's Certificate"
            value={otherOptions.radioOperator}
            onPress={() => handleOtherOptionsSelection('radioOperator')}
          />
          <Checkbox
            label="Professional Skipper"
            value={otherOptions.professionalSkipper}
            onPress={() => handleOtherOptionsSelection('professionalSkipper')}
          />

          <Text style={[styles.h4, {marginVertical: 10}]}>
            Sailing Experience
          </Text>
          <Checkbox
            label="I have charted a boat before"
            value={sailingExperience.charteredBoat}
            onPress={() => handleSailingExperienceSelection('charteredBoat')}
          />
          <Checkbox
            label="I'm an owner"
            value={sailingExperience.boatOwner}
            onPress={() => handleSailingExperienceSelection('boatOwner')}
          />
          <CustomInput
            label={'Description'}
            placeholder={
              'Provide full details about yourself and your experience.'
            }
            customStyle={[
              styles.customInput,
              {
                height: 198,
                borderRadius: 3,
                ...Platform.select({android: {textAlignVertical: 'top'}}),
              },
            ]}
            labelStyle={styles.labelText}
            multiline={true}
            onChangeText={text => {
              setDescription(text);
            }}
            value={description}
          />

          <Savebtn
            label={'Save'}
            onPress={() => {
              handlebookingcall();
              //  navigation.navigate('PaymentScreen');
            }}
          />
          <Space height={500} />
        </ScrollView>
      </View>
    </View>
  );
};

export default BoatingInformation;
