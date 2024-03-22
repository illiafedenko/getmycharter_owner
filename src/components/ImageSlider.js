import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {BackgroundImage} from 'react-native-elements/dist/config';
import Swiper from 'react-native-swiper';
import {hp, wp} from '../utils/Dimensions';

const ImageSlider = props => {
  const {imageLinks, showImg, source, onPress, styleIcon} = props;

  const renderImageSlide = imageLink => {
    return (
      <View style={styles.slide}>
        <BackgroundImage source={imageLink} style={styles.image} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: props.height ? props.height : 280,
    },
    dotStyle: {
      width: 10,
      height: 10,
      borderRadius: 10,
    },
    activeDotStyle: {
      width: 16,
      height: 16,
      borderRadius: 16,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    iconContainer: {
      position: 'absolute',
      marginBottom: 30,
    },
    iconStyle: {
      resizeMode: 'contain',
      height: hp(5),
      width: wp(4),
    },
  });

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        dotColor="white"
        activeDotColor="white"
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}>
        {imageLinks.map((imageLink, index) => (
          <View key={index}>{renderImageSlide(imageLink)}</View>
        ))}
      </Swiper>

      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        {showImg && (
          <Image source={source} style={[styles.iconStyle, styleIcon]} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImageSlider;
