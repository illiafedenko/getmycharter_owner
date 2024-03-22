import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Space from '../components/Space';
import TextButton from '../components/TextButton';
import IconTextButton from '../components/IconTextButton';

const Detailed_Price = ({navigation}) => {
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
          <Space height={30} />
          <View style={{paddingHorizontal: 40}}>
            <View>
              <View>
                <Text
                  style={{fontSize: 22, fontWeight: 'bold', color: '#246bbc'}}>
                  Aed 300 / hour
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
                    <Text style={{fontSize: 15, color: '#093373'}}>
                      Aed 820
                    </Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>
                    Service Fee
                  </Text>
                  <View>
                    <Text style={{fontSize: 15, color: '#093373'}}>Aed 10</Text>
                  </View>
                </View>
                <Space height={16} />
                <View style={[styles.float, {alignItems: 'center'}]}>
                  <Text style={{fontSize: 20, color: '#093373'}}>
                    Handling Fees
                  </Text>
                  <View>
                    <Text style={{fontSize: 15, color: '#093373'}}>Aed 58</Text>
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
            </View>
            <View></View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.tab}>
          <View style={{flexDirection: 'row', paddingVertical: 8}}>
            <View style={[styles.float, {alignItems: 'center'}]}>
              <View>
                <View>
                  <Text
                    style={{
                      color: '#246bbc',
                      fontSize: 22,
                      fontWeight: 'bold',
                    }}>
                    $1, 800
                  </Text>
                </View>
              </View>
              <Space width={40} />
              <View>
                <IconTextButton
                  title="Instant Book"
                  hasIcon={true}
                  onPress={() => {
                    navigation.navigate('Payment');
                  }}
                />
              </View>
            </View>
          </View>
        </View>
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
    height: 100,
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
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
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

export default Detailed_Price;
