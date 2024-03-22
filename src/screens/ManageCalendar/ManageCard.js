import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {styles} from './styles';
import {deleteYacht, getYachtData} from '../../Services/Api';
import {Colors} from '../../utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../Store/General';
import {useNavigation} from '@react-navigation/native';
import Space from '../../components/Space';

const YachatCard = ({searchQuery}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const isLoading = useSelector(state => state.general.appLoading);
  useEffect(() => {
    // Fetch yacht data when the component mounts
    fetchYachtData();
  }, []);

  const fetchYachtData = async () => {
    dispatch(setLoading(true));
    try {
      const yachtData = await getYachtData();
      setItems(yachtData?.yatchs || []);
    } catch (error) {
      console.log('Error fetching yacht data:', error);
    } finally {
      // Set loading to false regardless of success or failure
      dispatch(setLoading(false));
    }
  };

  const filteredItems = items.filter(item =>
    searchQuery
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true,
  );

  const handleEdit = id => {
    console.log('ID OF YACHAT', id);
    navigation.navigate('EditCalendar', {yachtId: id});
  };

  const renderItem = ({item}) => {
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return null; // Skip rendering if not a match
    }

    return (
      <View style={styles.cardContainer}>
        <View style={styles.inside}>
          <View style={styles.card}>
            {item?.images?.length > 0 ? (
              <Image source={{uri: item.images[0]}} style={styles.image} />
            ) : (
              <Text style={styles.noimg}>No image uploaded</Text>
            )}
            <View style={{width: '62%'}}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {item.title}{' '}
              </Text>

              <Text style={styles.country}>
                {item?.city} | {item?.psngr_capacity_specs} people
              </Text>

              {item?.price_per_hour ? (
                <Text style={styles.price}>
                  From {item?.price_per_hour}Aed per hour
                </Text>
              ) : (
                <Text style={styles.price}>Price not added yet!</Text>
              )}

              <TouchableOpacity
                style={[styles.item]}
                onPress={() => {
                  handleEdit(item?._id);
                }}>
                <Text style={styles.heading}>Manage Calendar</Text>
              </TouchableOpacity>

              {/* <Rating
              startingValue={item.rating}
              imageSize={20}
              readonly
              style={styles.rating}
            /> */}
            </View>
            {/* <View
            style={{
              //   backgroundColor: 'pink',
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.btnView}>
              <TouchableOpacity
                // onPress={() => handleEdit(item.id)}
                style={styles.button}>
                <Image
                  source={require('../../assets/images/edit.png')}
                  style={styles.imgStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDelete(item?._id)}
                style={styles.button}>
                <Image
                  source={require('../../assets/images/delete.png')}
                  style={styles.imgStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.addButtonEdit}
              onPress={() => handleEdit(item.id)}>
              <Text style={styles.addButtonTextBtn}>Calendar</Text>
            </TouchableOpacity>
          </View> */}
          </View>
        </View>
      </View>
    );
  };

  if (filteredItems.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={{color: 'black'}}>No yacht found</Text>
      </View>
    );
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={filteredItems}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()} // Ensure key is a string
      contentContainerStyle={{marginBottom: 250}}
    />
  );
};

export default YachatCard;
