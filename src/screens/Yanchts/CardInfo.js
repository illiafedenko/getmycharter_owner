import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {Rating} from 'react-native-ratings'; // Import a rating component if needed
import {styles} from './styles';
import {wp} from '../../utils/Dimensions';
import Space from '../../components/Space';

const CardInfo = ({title, desc, labelStyle}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardView}>
        <Text style={[styles.name2, labelStyle]}>{title}</Text>
        <Text style={styles.des}>{desc}</Text>
      </View>
    </View>
  );
};

export default CardInfo;
