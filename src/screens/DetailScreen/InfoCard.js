import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Space from '../../components/Space';
import {Colors} from '../../utils/Colors';

const InfoCard = () => {
  return (
    <View
      style={[
        styles.float,
        {
          borderRadius: 12,
          borderColor: 'black',
          borderWidth: 1,
          paddingVertical: 12,
          paddingHorizontal: 2,
        },
      ]}>
      <View
        style={{
          width: '24%',
          alignItems: 'center',
          paddingRight: 2,
          borderRightWidth: 1,
        }}>
        <View
          style={{
            //  height: '30',
            borderRadius: 10,
            backgroundColor: '#20A84E',
            paddingVertical: 4,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#FFCE31'}}>
            99%
          </Text>
        </View>
        <Space height={8} />
        <View>
          <Text numberOfLines={2} style={styles.infoText}>
            Owner’s response rate
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '25%',
          alignItems: 'center',
          paddingRight: 2,
          borderRightWidth: 1,
        }}>
        <View
          style={{
            //   height: '30',
            borderRadius: 10,
            backgroundColor: '#FFCE31',
            paddingVertical: 4,
            paddingHorizontal: 16,
          }}>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#093373'}}>
            Moderate
          </Text>
        </View>
        <Space height={8} />
        <View>
          <Text numberOfLines={2} style={styles.infoText}>
            Cancelation policy
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '25%',
          alignItems: 'center',
          paddingRight: 2,
          borderRightWidth: 1,
        }}>
        <Image
          source={require('../../assets/images/users.png')}
          style={{width: 32, height: 20}}
        />
        <Space height={12} />
        <View>
          <Text numberOfLines={2} style={styles.infoText}>
            Up to 12 passengers
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '25%',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/skipper.png')}
          style={{width: 40, height: 18}}
        />
        <Space height={12} />
        <View>
          <Text numberOfLines={2} style={styles.infoText}>
            Captained
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
