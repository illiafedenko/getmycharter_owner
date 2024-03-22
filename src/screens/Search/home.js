import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';

import Space from '../../components/Space';
import {Image} from 'react-native-elements';
import YachtCard from '../../components/YachtCard';
import TextButton from '../../components/TextButton';

const Home = ({navigation, setStatus}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View>
        <View style={styles.topSection}>
          <Space height={40} />
          <View style={styles.locationSection}>
            <Image
              source={require('../../assets/images/location.png')}
              style={[styles.icon, styles.left]}
            />
            <View style={[styles.left, styles.locationText]}>
              <Text style={styles.locationLabel}>Location</Text>
              <Text style={styles.location}>Lorem Ipsum </Text>
            </View>
            <Image
              source={require('../../assets/images/avatar.png')}
              style={[styles.icon, styles.right]}
            />
          </View>
          <Space height={20} />
          <View style={styles.label}>
            <Text style={styles.location}>With Luxury Yachts</Text>
            <Text style={styles.location}>Relax on this planet...</Text>
          </View>
          <Space height={20} />
          <TouchableOpacity onPress={openModal}>
            <View style={styles.searchField}>
              <Image
                source={require('../../assets/images/search.png')}
                style={styles.searchIcon}
              />
              <Text style={styles.searchLabel}>Where do you want to sail?</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Type
              </Text>
              <Space height={10} />
              <ScrollView
                style={styles.carousel}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <Image
                    source={require('../../assets/images/type_1.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>Yacht</Text>
                </View>
                <Space width={20} />
                <View>
                  <Image
                    source={require('../../assets/images/type_2.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>RIB</Text>
                </View>
                <Space width={20} />
                <View>
                  <Image
                    source={require('../../assets/images/type_3.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>HouseBoat</Text>
                </View>
              </ScrollView>
            </View>
            <Space height={20} />
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Popular Destination
              </Text>
              <Space height={10} />
              <ScrollView
                style={styles.carousel}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                  <Image
                    source={require('../../assets/images/destination_1.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>Dubai, Marina</Text>
                </View>
                <Space width={20} />
                <View>
                  <Image
                    source={require('../../assets/images/destination_2.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>Abu dhabi</Text>
                </View>
                <Space width={20} />
                <View>
                  <Image
                    source={require('../../assets/images/destination_3.png')}
                    style={styles.image}
                  />
                  <Space height={8} />
                  <Text style={styles.textAlignCenter}>Ras Al Khaimah</Text>
                </View>
              </ScrollView>
            </View>
            <Space height={20} />
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Popular Listing
              </Text>
              <Space height={10} />
              <View>
                <YachtCard
                  onPress={() => {
                    navigation.navigate('Info');
                  }}
                />
              </View>
              <Space height={30} />
              <View>
                <YachtCard
                  onPress={() => {
                    navigation.navigate('Info');
                  }}
                />
              </View>
              <Space height={10} />
            </View>
          </ScrollView>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.leftComponent} onPress={closeModal}>
              <Image
                source={require('../../assets/images/arrow_left.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Search</Text>
            <TouchableOpacity style={styles.rightComponent} onPress={() => {}}>
              <Image
                source={require('../../assets/images/filter.png')}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 16,
              backgroundColor: 'white',
              borderRadius: 16,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomColor: 'rgb(00144A)',
                borderBottomWidth: 0.5,
              }}>
              <Image
                source={require('../../assets/images/point.png')}
                style={{width: 20, height: 20}}
              />
              <Space width={16} />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Dubai, United Arab Emirates
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomColor: 'rgb(00144A)',
                borderBottomWidth: 0.5,
              }}>
              <Image
                source={require('../../assets/images/calendar.png')}
                style={{width: 20, height: 20}}
              />
              <Space width={16} />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Date</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 16,
                borderBottomColor: 'rgb(00144A)',
                borderBottomWidth: 0.5,
              }}>
              <Image
                source={require('../../assets/images/group.png')}
                style={{width: 20, height: 20}}
              />
              <Space width={16} />
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Number of People
              </Text>
            </View>
            <View style={{paddingHorizontal: 16}}>
              <TextButton
                title={'Search'}
                onPress={() => {
                  setStatus(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    overflow: 'scroll',
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
  topSection: {
    height: 260,
    backgroundColor: '#246bbc',
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
    marginRight: 8,
  },
  locationText: {
    paddingHorizontal: 8,
  },
  location: {
    color: '#ffffff',
  },
  label: {
    paddingLeft: 16,
  },
  searchField: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    flex: 1,
    margin: 16,
    width: 20,
    height: 22,
  },
  searchLabel: {
    margin: 16,
    flex: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  carousel: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 60,
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: 'rgba(0,0,0, 0.7)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Home;
