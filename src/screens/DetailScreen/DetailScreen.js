import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImageSlider from '../../components/ImageSlider';
import Space from '../../components/Space';
import {styles} from './styles';
import {hp, wp} from '../../utils/Dimensions';
import InfoCard from './InfoCard';
import UserCard from './UserCard';
import {Colors} from '../../utils/Colors';
import SimilarYancht from './SimilarYancht';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = ({}) => {
  const [showFullText, setShowFullText] = useState(false);
  const navigation = useNavigation();
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const textToShow = showFullText
    ? `Greetings from Amwaj Al Bahar Boats and Yachts Chartering! 3 cabins, flying bridge, sun deck, living room, kitchen, etc. Spacious outdoor and indoor areas. Large Flybridge with BBQ Beautiful interior Soft drinks & water provided (guests are permitted to bring other beverages of their choice). Friendly and experienced crew Great for parties, gatherings, celebrations or corporate team-building day out`
    : `Greetings from Amwaj Al Bahar Boats and Yachts Chartering! 3 cabins, flying bridge, sun deck....`;

  const buttonText = showFullText ? 'View Less' : 'View More';
  const yachtData = [
    {
      image:
        'https://monacolife.net/wp-content/uploads/2023/10/yct-006-aspect16x9-653bb0463a4ef.webp',
      title: 'Luxury Yacht 1',
      location: 'Caribbean',
      seats: '10',
      caption: 'Luxury Yacht with Jacuzzi',
      rating: 4.5,
      price: '$1000',
      isFavorite: true,
      instantBook: true,
    },
    {
      image:
        'https://monacolife.net/wp-content/uploads/2023/10/yct-006-aspect16x9-653bb0463a4ef.webp',
      title: 'Luxury Yacht 1',
      location: 'Caribbean',
      seats: '10',
      caption: 'Luxury Yacht with Jacuzzi',
      rating: 4.5,
      price: '$1000',
      isFavorite: true,
      instantBook: true,
    },
    // Add more yacht data objects as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        <ImageSlider
          imageLinks={[
            require('../../assets/images/yacht_1.png'),
            require('../../assets/images/yacht_2.png'),
            require('../../assets/images/yacht_3.png'),
            require('../../assets/images/yacht_1.png'),
            require('../../assets/images/yacht_2.png'),
          ]}
          source={require('../../assets/images/backIcon.png')}
          styleIcon={{width: wp(6), height: hp(5), top: 30, left: 20}}
          onPress={() => navigation.goBack()}
          showImg={true}
        />
        <View style={{margin: 16}}>
          <View style={styles.float}>
            <View>
              <Text style={styles.BtnText}>Luxury 60 Feet Majesty YACHT</Text>
            </View>
            <View style={[styles.float, {marginTop: 4}]}>
              <Image
                source={require('../../assets/images/point.png')}
                style={{width: 20, height: 20}}
              />
              <Text style={styles.locText}> Dubai</Text>
            </View>
          </View>
          <Space height={16} />
          <View style={styles.rowLeft}>
            <Image
              source={require('../../assets/images/star.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={styles.locText}> 5.0 (34 Bookings)</Text>
          </View>
          <Space height={16} />
          <InfoCard />
          <Space height={16} />
          <UserCard />
          <View>
            <Text style={styles.BtnText}>About</Text>
            <Space height={8} />
            <Text style={[styles.locText, {textAlign: 'justify'}]}>
              {textToShow}
            </Text>
            <Space height={8} />
            <TouchableOpacity onPress={toggleText}>
              <Text
                style={{
                  paddingLeft: 8,
                  textDecorationLine: 'underline',
                  color: '#246bbc',
                }}>
                {buttonText}
              </Text>
            </TouchableOpacity>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <Text style={styles.BtnText}>Features</Text>
            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Air Conditioning
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Anchor</Text>
                <Image
                  source={require('../../assets/images/no.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Bathroom</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Cooler / Ice chest
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Floating mat</Text>
                <Image
                  source={require('../../assets/images/no.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>GPS</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Shower</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Stereo</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Stereo Aux Input
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                textDecorationLine: 'underline',
                color: '#246bbc',
              }}>
              View Less
            </Text>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={styles.BtnText}>Specification</Text>
                <Image
                  source={require('../../assets/images/up.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
            </View>

            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Year</Text>
                <Text style={{color: 'black', fontSize: 16}}>2009</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Length</Text>
                <Text style={{color: 'black', fontSize: 16}}>30 m</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Made by</Text>
                <Text style={{color: 'black', fontSize: 16}}>Beneteau</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Model</Text>
                <Text style={{color: 'black', fontSize: 16}}>Majesty</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Capacity</Text>
                <Text style={{color: 'black', fontSize: 16}}>
                  Up to 12 people
                </Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  DetailScreen Type
                </Text>
                <Text style={{color: 'black', fontSize: 16}}>Flybridge</Text>
              </View>
            </View>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <Text style={styles.BtnText}>Location</Text>
            <Space height={8} />
            <Image
              source={require('../../assets/images/destination_1.png')}
              resizeMode="contain"
              style={{marginLeft: 8, width: '96%', height: 200}}
            />
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <Text style={styles.BtnText}>Reviews</Text>
            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    //  shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../../assets/images/avatar.png')}
                          resizeMode="contain"
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right', color: 'black'}}>
                        1 / 34
                      </Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
                <Space width={16} />
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../../assets/images/avatar.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                          resizeMode="contain"
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right', color: 'black'}}>
                        1 / 34
                      </Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
                <Space width={16} />
                <View
                  style={{
                    width: 300,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#fff',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 24,
                  }}>
                  <View style={styles.float}>
                    <View style={styles.float}>
                      <View
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 100,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={require('../../assets/images/avatar.png')}
                          style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                          }}
                        />
                      </View>
                      <View style={{paddingLeft: 8}}>
                        <Text
                          style={{
                            color: 'black',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          Leo
                        </Text>
                        <Text style={{color: 'black'}}>Sep, 2023</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{textAlign: 'right', color: 'black'}}>
                        1 / 34
                      </Text>
                      <Space height={4} />
                      <View style={{flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                        <Image
                          source={require('../../assets/images/star.png')}
                          style={{width: 16, height: 16}}
                        />
                      </View>
                    </View>
                  </View>
                  <Space height={16} />
                  <View>
                    <Text style={{color: 'black'}}>
                      “ I Have travelled the wonder scene by this yacht. It was
                      really attractive and nice. I love that. And I want to
                      play again.”
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                textDecorationLine: 'underline',
                color: '#246bbc',
              }}>
              View all
            </Text>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <Text style={styles.BtnText}>Things to know</Text>
            <Space height={8} />
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Allowed on the yacht
            </Text>
            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Air Conditioning
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Anchor</Text>
                <Image
                  source={require('../../assets/images/no.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Bathroom</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Cooler / Ice chest
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Floating mat</Text>
                <Image
                  source={require('../../assets/images/no.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>GPS</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Shower</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>Stereo</Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  style={{width: 16, height: 16}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>
                  Stereo Aux Input
                </Text>
                <Image
                  source={require('../../assets/images/yes.png')}
                  resizeMode="contain"
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                textDecorationLine: 'underline',
                color: '#246bbc',
              }}>
              View Less
            </Text>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={styles.BtnText}>Cancellation</Text>
                <Image
                  source={require('../../assets/images/up.png')}
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>

            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <View>
                <Text style={{color: 'black', fontSize: 16}}>
                  {' '}
                  - Free cancellations until 5 days before the booking start
                  time
                </Text>
              </View>
              <Space height={4} />
              <View>
                <Text style={{color: 'black', fontSize: 16}}>
                  {' '}
                  - 50% refund for cancellations between 3-5 days before the
                  booking start time
                </Text>
              </View>
              <Space height={4} />
              <View>
                <Text style={{color: 'black', fontSize: 16}}>
                  {' '}
                  - Cancellations within 2 days of the booking start time are
                  non-refundable
                </Text>
              </View>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                textDecorationLine: 'underline',
                color: '#246bbc',
              }}>
              See policy
            </Text>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={styles.BtnText}>Security deposit</Text>
                <Image
                  source={require('../../assets/images/up.png')}
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>

            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <Text style={{color: 'black', fontSize: 16}}>
                A security deposit hold (not a charge) will be placed on your
                credit card 48 hours before you booking starts to cover any
                incidental damage that may accur during your rental. This hold
                is replaced 48 hours after the booking is complete, if no claims
                are made. The security deposit amount for the yacht you are
                booking will be outlined during the check-out process.
              </Text>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                textDecorationLine: 'underline',
                color: '#246bbc',
              }}>
              Learn more
            </Text>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={styles.BtnText}>Captain info</Text>
                <Image
                  source={require('../../assets/images/up.png')}
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>

            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <Text style={{color: 'black', fontSize: 16}}>
                If requested, the owner can provide a list of available captains
                for bareboat charter, or the renter can use their own qualified
                captain. if the yacht is being time chartered, the owner will
                provide the Captain.
              </Text>
            </View>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <View>
            <View>
              <View style={[styles.float, {alignItems: 'center'}]}>
                <Text style={styles.BtnText}>Booking options</Text>
                <Image
                  source={require('../../assets/images/up.png')}
                  style={{width: 16, height: 16}}
                />
              </View>
            </View>
            <Space height={8} />
            <Text
              style={{
                paddingLeft: 8,
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Captained
            </Text>

            <Space height={8} />
            <View style={{paddingLeft: 8}}>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>2 hours</Text>
                <Text style={{color: 'black', fontSize: 16}}>$ 575</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>3 hours</Text>
                <Text style={{color: 'black', fontSize: 16}}>$ 845</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>4 hours</Text>
                <Text style={{color: 'black', fontSize: 16}}>$ 1100</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>6 hours</Text>
                <Text style={{color: 'black', fontSize: 16}}>$ 1685</Text>
              </View>
              <View style={styles.float}>
                <Text style={{color: 'black', fontSize: 16}}>8 hours</Text>
                <Text style={{color: 'black', fontSize: 16}}>$ 2200</Text>
              </View>
            </View>
          </View>
          <Space height={16} />
          <View style={styles.horizontalLine}></View>
          <Space height={16} />
          <SimilarYancht data={yachtData} />
          <TouchableOpacity style={styles.addButton} onPress={() => {}}>
            <Text style={styles.addButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
