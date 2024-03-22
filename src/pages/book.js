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

const Book = ({navigation}) => {
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
                navigation.navigate('Info');
              }}>
              <Image
                source={require('../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Booking</Text>
            <View style={styles.rightComponent} />
          </View>
          <Space height={30} />
          <View style={{paddingHorizontal: 40}}>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={[
                    styles.left,
                    {fontSize: 20, color: 'rgba(0,0,0,0.8)'},
                  ]}>
                  Date
                </Text>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 4,
                      padding: 5,
                    },
                  ]}>
                  <View style={[styles.float, {alignItems: 'center'}]}>
                    <Text style={[styles.left, {fontSize: 16, color: 'black'}]}>
                      10 / 03 / 2023
                    </Text>
                    <Image
                      source={require('../assets/images/calendar.png')}
                      style={[
                        styles.right,
                        {width: 20, height: 20, marginTop: 4},
                      ]}
                    />
                  </View>
                </View>
              </View>
              <Space height={20} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text
                  style={[
                    styles.left,
                    {fontSize: 20, color: 'rgba(0,0,0,0.8)'},
                  ]}>
                  Start time
                </Text>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 4,
                      padding: 5,
                    },
                  ]}>
                  <View style={[styles.float, {alignItems: 'center'}]}>
                    <Text style={[styles.left, {fontSize: 16, color: 'black'}]}>
                      10 / 03 / 2023
                    </Text>
                    <Image
                      source={require('../assets/images/calendar.png')}
                      style={[
                        styles.right,
                        {width: 20, height: 20, marginTop: 4},
                      ]}
                    />
                  </View>
                </View>
              </View>
              <Space height={20} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>Duration</Text>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                    },
                  ]}>
                  <View style={[styles.float, {alignItems: 'center'}]}>
                    <TextButton
                      title="2 hrs"
                      style={{width: 64, height: 30}}
                      isOutline={true}
                    />
                    <TextButton
                      title="3 hrs"
                      style={{width: 64, height: 30}}
                      isOutline={true}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <View></View>
                <View
                  style={[
                    styles.right,
                    {
                      width: 150,
                    },
                  ]}>
                  <View style={[styles.float, {alignItems: 'center'}]}>
                    <TextButton
                      title="4 hrs"
                      style={{width: 64, height: 30}}
                      isOutline={false}
                    />
                    <TextButton
                      title="6 hrs"
                      style={{width: 64, height: 30}}
                      isOutline={true}
                    />
                  </View>
                </View>
              </View>
              <Space height={16} />
              <View
                style={{borderBottomWidth: 2, borderStyle: 'dashed'}}></View>
              <Space height={32} />
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={{fontSize: 20, color: '#093373'}}>Check-in</Text>
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
                <Text style={{fontSize: 20, color: '#093373'}}>Check-out</Text>
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
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailedPrice');
                  }}>
                  <Text
                    style={{
                      textDecorationLine: 'underline',
                      color: '#246bbc',
                    }}>
                    Detail Price
                  </Text>
                </TouchableOpacity>
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

export default Book;
