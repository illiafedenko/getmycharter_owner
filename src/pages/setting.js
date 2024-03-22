import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Space from '../components/Space';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextButton from '../components/TextButton';
import {Colors} from '../utils/Colors';
import {FontSize} from '../utils/FontSize';
import fonts from '../assets/fonts';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import {hp, wp} from '../utils/Dimensions';
import WebViewModal from '../components/WebViewModal/WebViewModal';

const Setting = ({navigation}) => {
  const languages = ['English - US', 'English - UK', 'Arab - UAE'];
  const currencies = ['US Dollar - $', 'UAE - Aed'];
  const [webViewModalVisible, setWebViewModalVisible] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState('');

  const openWebViewModal = url => {
    setWebViewUrl(url);
    setWebViewModalVisible(true);
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <CustomHeader
          backgroundColor={Colors.white}
          source={require('../assets/images/backIcon.png')}
          onPress={() => navigation.goBack()}
          label={'Settings'}
          styleIcon={{width: wp(7), height: hp(10)}}
          height={hp(11)}
          elevation={5}
          showLabel={true}
          showImg={true}
        />
        <View style={{padding: 16}}>
          <View>
            <Text style={styles.title}>Account Language</Text>
            <Space height={16} />
            <SelectDropdown
              data={languages}
              defaultValue={languages[0]}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => (
                <Image source={require('../assets/images/arrowDown.png')} />
              )}
              buttonStyle={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
              }}
            />
          </View>
          <Space height={16} />
          <View>
            <Text style={styles.title}>Account Currency</Text>
            <Space height={16} />
            <SelectDropdown
              data={currencies}
              defaultValue={currencies[0]}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              renderDropdownIcon={() => (
                <Image source={require('../assets/images/arrowDown.png')} />
              )}
              buttonStyle={{
                height: 40,
                width: '100%',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 5,
              }}
            />
          </View>
          <Space height={32} />
          <TouchableOpacity
            style={[styles.float, {alignItems: 'center'}]}
            onPress={() =>
              openWebViewModal(
                'https://www.freeprivacypolicy.com/live/9a69084e-ed0b-464e-b497-1f57d38ead19',
              )
            }>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Image
              source={require('../assets/images/forward.png')}
              style={{width: 10, height: 20, marginRight: 8}}
            />
          </TouchableOpacity>
          <Space height={32} />
          <TouchableOpacity
            style={[styles.float, {alignItems: 'center'}]}
            onPress={() =>
              openWebViewModal(
                'https://www.freeprivacypolicy.com/live/3e90dab2-edde-4a89-84b9-46124388ade5',
              )
            }>
            <Text style={styles.title}>Privacy Policy</Text>
            <Image
              source={require('../assets/images/forward.png')}
              style={{width: 10, height: 20, marginRight: 8}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <WebViewModal
        visible={webViewModalVisible}
        onClose={() => setWebViewModalVisible(false)}
        url={webViewUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1, overflow: 'scroll'},
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  title: {
    color: Colors.mainBlue,
    fontSize: FontSize.medium,
    fontFamily: fonts.bold,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: '#003580',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
});

export default Setting;
