import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Space from '../../components/Space';
import {wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const YachtCard = ({item}) => {
  const {
    image,
    title,
    location,
    seats,
    caption,
    rating,
    price,
    isFavorite,
    instantBook,
  } = item;

  const addToFavorite = () => {
    // Logic to add to favorites
  };

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.topBar}>
        {instantBook && (
          <Image
            source={require('../../assets/images/instantTag.png')}
            style={styles.iconinstant}
            resizeMode="contain"
          />
        )}
        {isFavorite && (
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={addToFavorite}>
            <Image
              source={require('../../assets/images/like.png')}
              style={styles.instantBook}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <Image source={{uri: image}} style={styles.yachtImage} />

      <TouchableOpacity
        style={styles.cardInfo}
        onPress={() => {
          console.log('first');
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 20,
              color: 'rgba(0,0,0, 0.8)',
            }}>
            {title}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/point.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={{fontSize: 12, color: 'rgba(0,0,0,0.7)'}}>
              {location}
            </Text>
          </View>
        </View>
        <Space height={5} />

        <Space height={5} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/bed.png')}
                style={[{flex: 0, width: 16, height: 16, marginTop: 4}]}
              />
              <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>
                &nbsp; | &nbsp;
              </Text>
            </View>
          </View>
          <View>
            <View>
              <View style={{flexDirection: 'row', right: 20}}>
                <Image
                  source={require('../../assets/images/skipper.png')}
                  style={[{flex: 0, width: 26, height: 12, marginTop: 5}]}
                />
                <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>
                  &nbsp; With or without skippers
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/star.png')}
              style={[{flex: 0, width: 20, height: 20}]}
            />
            <Text style={{flex: 0, color: 'rgba(0,0,0,0.7)'}}>{rating}</Text>
          </View>
        </View>
        <Space height={10} />
        <Text
          style={{fontWeight: '500', fontSize: 20, color: 'rgba(0,0,0,0.8)'}}>
          From {price} per hour
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const SimilarYancht = ({data}) => {
  return (
    <View>
      <Text style={styles.BtnText}>Similar Yachts</Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <YachtCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp(80),
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    position: 'absolute',
    zIndex: 1,
    width: '100%',
  },
  favoriteButton: {
    padding: 5,
  },
  iconinstant: {
    right: 5,
    width: 120,
  },
  icon: {
    width: 30,
    height: 30,
  },
  instantBook: {
    width: 60,
    height: 30,
  },
  yachtImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    color: 'grey',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  cardInfo: {
    padding: 10,
  },
  BtnText: {
    color: Colors.mainBlue,
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    marginVertical: 15,
  },
});

export default SimilarYancht;
