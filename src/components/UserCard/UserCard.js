import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';
import {selectUserInfo} from '../../Store/Profile/userInfoSlice';
import {useSelector} from 'react-redux';

const UserCard = ({profileImage, userName, rating, numberOfRatings}) => {
  const userInfo = useSelector(selectUserInfo);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Image
          key={i}
          source={require('../../assets/images/star.png')} // Replace with your star icon
          style={styles.starIcon}
        />,
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View>
        {userInfo && userInfo.profile_pic !== 'none' ? (
          <Image
            source={{
              uri:
                userInfo.profile_pic ||
                (userInfo.user?.photo
                  ? userInfo.user.photo
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2tcoufPsMbxoko0vTZnn7-34HqNp990Y3MviUI79CQ&s'),
            }}
            style={styles.profileImageCon}
          />
        ) : (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
            style={styles.profileImageCon}
          />
        )}
      </View>
      <Text style={styles.userName}>
        {' '}
        {userInfo ? userInfo.username || userInfo.user?.name : 'User Name'}
      </Text>
      <View style={styles.ratingContainer}>
        <View style={styles.starContainer}>{renderStars()}</View>
        <Text style={styles.numberOfRatings}>{numberOfRatings}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2),
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: wp(90),
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  profileImageCon: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 10,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    marginBottom: 5,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  numberOfRatings: {
    fontSize: 14,
    color: '#888',
  },
});

export default UserCard;
