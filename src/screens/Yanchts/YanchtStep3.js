import {View, Text, Keyboard, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import Space from '../../components/Space';
import {useNavigation} from '@react-navigation/native';
import BottomView from '../../components/BottomView/BottomView';
import Toast from 'react-native-simple-toast';
import CustomInput from '../../components/CustomInput/CustomInput';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const YanchtStep3 = ({route}) => {
  const {addressData, insuraneType} = route?.params;
  console.log('addressData', addressData, insuraneType);
  const navigation = useNavigation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleTitleChange = inputTitle => {
    // Limit the input to 60 characters for title
    if (inputTitle.length <= 60) {
      setTitle(inputTitle);
    }
  };

  const handleDescriptionChange = inputDescription => {
    // Handle description input
    setDescription(inputDescription);
  };

  const remainingTitleCharacters = 60 - title.length;

  const handleNextPress = () => {
    if (!title.trim()) {
      // If title is empty or whitespace, show a toast message
      Toast.show('Please fill in the title field');
    } else if (!description.trim()) {
      Toast.show('Please fill in the Description field');
    } else {
      // Navigate to YanchtStep4 and pass the title and description as params
      navigation.navigate('YanchtStep4', {
        title: title,
        description: description,
        addressData: addressData,
        insuraneType: insuraneType,
      });
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yacht'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />
      <CardInfo
        title={'Your yacht listing'}
        desc={
          'This is what renters will see when looking for yachts in your area. You can always edit this later.'
        }
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.constScroll}>
        <Text
          style={[
            styles.texth1,
            {color: Colors.mainBlue, marginVertical: hp(4)},
          ]}>
          Yancht title and description
        </Text>

        {/* <Text
          style={[
            styles.labelText,
            {
              width: wp(70),
              alignSelf: 'center',
              marginVertical: hp(1),
            },
          ]}>
          Title:
        </Text> */}
        {/* <TextInput
          style={[styles.customInputTitle]}
          value={title}
          onChangeText={handleTitleChange}
          maxLength={60}
          multiline
        /> */}

        <CustomInput
          label={'Title:'}
          customStyle={styles.customInputTitle}
          labelStyle={styles.labelText}
          onChangeText={handleTitleChange}
          maxLength={60}
        />
        <Text style={[styles.limitText]}>
          {`${remainingTitleCharacters} characters remaining`}
        </Text>

        <CustomInput
          label={'Description'}
          customStyle={styles.customInput}
          labelStyle={styles.labelText}
          multiline={true}
          onChangeText={handleDescriptionChange}
        />
      </KeyboardAwareScrollView>
      {!isKeyboardOpen && (
        <BottomView
          onBackPress={() => {
            navigation.goBack();
          }}
          onNextPress={handleNextPress}
          showback={true}
        />
      )}
    </View>
  );
};

export default YanchtStep3;
