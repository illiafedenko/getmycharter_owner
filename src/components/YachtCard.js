import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import Space from '../components/Space';
import {Image} from 'react-native-elements';
import ImageSlider from './ImageSlider';

const YachtCard = props => {
  return (
    <View style={styles.card}>
      <View
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <ImageSlider
          imageLinks={[
            require('../assets/images/yacht_2.png'),
            require('../assets/images/yacht_3.png'),
            require('../assets/images/yacht_1.png'),
          ]}
          height={170}
          radius={true}
        />
      </View>
      <TouchableOpacity style={styles.cardInfo} onPress={props.onPress}>
        <Text
          style={{fontWeight: '900', fontSize: 20, color: 'rgba(0,0,0, 0.8)'}}>
          Gulf Craft Majestic 62
        </Text>
        <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.7)'}}>
          Dubai, United Arab Emirates | 25 people | 62 Feet
        </Text>
        <Space height={5} />
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/images/star.png')}
            style={[{flex: 0, width: 20, height: 20}]}
          />
          <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>
            {' '}
            5.0 (34 Bookings)
          </Text>
        </View>
        <Space height={5} />

        <View style={{flexDirection: 'row'}}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/images/bed.png')}
                style={[{flex: 0, width: 16, height: 16, marginTop: 4}]}
              />
              <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>
                &nbsp; 6 | &nbsp;
              </Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/images/skipper.png')}
                style={[{flex: 0, width: 26, height: 12, marginTop: 5}]}
              />
              <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>
                &nbsp; With or without skippers
              </Text>
            </View>
          </View>
        </View>
        <Space height={10} />
        <Text
          style={{fontWeight: '500', fontSize: 20, color: 'rgba(0,0,0,0.8)'}}>
          From 800Aed per hour
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 320,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardInfo: {
    padding: 10,
  },
});

export default YachtCard;
