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

import Space from '../components/Space';
import TextButton from '../components/TextButton';
import IconTextButton from '../components/IconTextButton';

const Payment = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  // Function to handle text input changes
  const handleInputChange = text => {
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.leftComponent}
              onPress={() => {
                navigation.navigate('Book');
              }}>
              <Image
                source={require('../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Total Price</Text>
            <View style={styles.rightComponent} />
          </View>
          <View style={{paddingHorizontal: 40}}>
            <View>
              <View>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: '#246bbc'}}>
                  $ 300 / hour
                </Text>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>From</Text>
                  <View
                    style={[
                      styles.right,
                      {
                        width: 150,
                      },
                    ]}>
                    <Text style={{fontSize: 15, color: '#093373'}}>
                      10 / 03 / 2023 10 : 00
                    </Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>To</Text>
                  <View
                    style={[
                      styles.right,
                      {
                        width: 150,
                      },
                    ]}>
                    <Text style={{fontSize: 15, color: '#093373'}}>
                      10 / 03 / 2023 18 : 00
                    </Text>
                  </View>
                </View>
              </View>
              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={16} />
              <View>
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>
                    Rental Price
                  </Text>
                  <View>
                    <Text style={{fontSize: 15, color: '#093373'}}>$ 820</Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>
                    Service Fee
                  </Text>
                  <View>
                    <Text style={{fontSize: 15, color: '#093373'}}>$ 910</Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>
                    Handling Fees
                  </Text>
                  <View>
                    <Text style={{fontSize: 15, color: '#093373'}}>$ 58</Text>
                  </View>
                </View>
                <Space height={16} />
              </View>

              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={16} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>
                  Total Price
                </Text>
                <View style={[]}>
                  <Text style={{fontSize: 15, color: 'black'}}>$1, 800</Text>
                </View>
              </View>
              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={16} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>
                  Secure Payment
                </Text>
              </View>
              <Space height={16} />
              <View style={[styles.float]}>
                <View>
                  <Text>First Name</Text>
                  <Space height={4} />
                  <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter first name"
                  />
                </View>
                <Space width={8} />
                <View>
                  <Text>Last Name</Text>
                  <Space height={4} />
                  <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="Enter last name"
                  />
                </View>
              </View>
              <Space height={16} />
              <View>
                <View style={styles.float}>
                  <Text>Card Number</Text>
                  <View style={styles.float}>
                    <Image
                      source={require('../assets/images/visa.png')}
                      style={{width: 40, height: 24}}
                    />
                    <Space width={4} />
                    <Image
                      source={require('../assets/images/mastercard.png')}
                      style={{width: 40, height: 24}}
                    />
                    <Space width={4} />
                    <Image
                      source={require('../assets/images/amex.png')}
                      style={{width: 40, height: 24}}
                    />
                  </View>
                </View>
                <Space height={4} />
                <TextInput
                  style={styles.inputCard}
                  value={inputValue}
                  onChangeText={handleInputChange}
                  placeholder="1234-1234-1234-1234"
                />
              </View>
              <Space height={16} />
              <View style={[styles.float]}>
                <View>
                  <Text>Expiration Date</Text>
                  <Space height={4} />
                  <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="MM/YY"
                  />
                </View>
                <View>
                  <Text>CVV / cryptogram</Text>
                  <Space height={4} />
                  <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={handleInputChange}
                    placeholder="CVV"
                  />
                </View>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.tab}>
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <IconTextButton title="Validate and pay $1,800" hasIcon={false} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 4,
  },
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
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  input: {
    width: 140,
    height: 36,
    borderColor: '#003580',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    color: 'black',
  },
  inputCard: {
    width: '100%',
    height: 36,
    borderColor: '#003580',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    color: 'black',
  },
});

export default Payment;
