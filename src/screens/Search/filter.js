import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';

import Space from '../../components/Space';
import TextButton from '../../components/TextButton';
import YachtCard from '../../components/YachtCard';
import GuestFilter from './GuestFilter';
import MoreFilter from './MoreFilter';

const MainScreen = ({navigation}) => {
  const [filterGuest, setFilterGuest] = useState(false);
  const drawerRef = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(0)).current;
  const topBarAnimation = useRef(new Animated.Value(0)).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.parallel([
      Animated.timing(topBarAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(drawerAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const OpenGuestFilter = () => {
    setFilterGuest(true);
    openDrawer();
  };
  const OpenMoreFilter = () => {
    setFilterGuest(false);
    openDrawer();
  };

  const closeDrawer = () => {
    Animated.parallel([
      Animated.timing(topBarAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setDrawerOpen(false);
    });
  };

  const drawerTranslateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0],
  });

  const topBarHeight = topBarAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.topBar, {height: topBarHeight}]}>
        <Text style={styles.topBarText}>{filterGuest?"Number of Guest":"Search Yachts"}</Text>
      </Animated.View>
      <View style={{flex: 1, margin: 16}}>
        <TouchableOpacity>
          <View style={[styles.searchWidget, {backgroundColor: '#f5f5f5'}]}>
            <Image
              source={require('../../assets/images/point.png')}
              style={styles.searchIcon}
            />
            <Text style={styles.searchLabel}>Dubai, United Arab Emirates</Text>
          </View>
        </TouchableOpacity>
        <Space height={20} />
        <View style={styles.searchItems}>
          <TouchableOpacity>
            <View style={styles.searchWidget}>
              <Text style={styles.searchItem}>Dates</Text>
            </View>
          </TouchableOpacity>
          <Space width={8} />
          <TouchableOpacity onPress={OpenGuestFilter}>
            <View style={styles.searchWidget}>
              <Text style={styles.searchItem}>Guests</Text>
            </View>
          </TouchableOpacity>
          <Space width={8} />
          <TouchableOpacity onPress={OpenMoreFilter}>
            <View style={styles.searchWidget}>
              <Text style={styles.searchItem}>More Filters</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Space height={20} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'black', fontSize: 20}}>
            100+ Boats Available
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/sort.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <Space height={10} />
        <YachtCard />
        <Space height={30} />
        <YachtCard />
        <Space height={30} />
        <YachtCard />
      </View>
      {drawerOpen && (
        <View style={styles.drawerOverlay}>
          <Animated.View
            style={[
              styles.drawerContent,
              {transform: [{translateX: drawerTranslateX}]},
            ]}
            ref={drawerRef}>
            <View style={styles.drawerTopBar}>
              <Text style={styles.drawerTopBarText}></Text>
            </View>
            <View style={styles.drawerBody}>
              {filterGuest ? (
                <GuestFilter closeDrawer={closeDrawer} />
              ) : (
                <MoreFilter closeDrawer={closeDrawer} />
              )}
            </View>
          </Animated.View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 12,
  },
  topBarText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainScreen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1,
  },
  drawerContent: {
    backgroundColor: 'white',
    width: '84%',
    height: '100%',
  },
  drawerTopBar: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerTopBarText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  drawerBody: {
    flex: 1,
    padding: 10,
  },

  searchWidget: {
    borderColor: '#A9B4BE',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchItems: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  searchItem: {
    margin: 8,
    color: 'black',
    fontSize: 16,
  },
  searchIcon: {
    marginVertical: 16,
    marginHorizontal: 8,
    width: 20,
    height: 20,
  },
  searchLabel: {
    marginVertical: 16,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
