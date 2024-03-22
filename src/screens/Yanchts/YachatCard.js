import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {styles} from './styles';
import {deleteYacht, getYachtData, updateYachtStatus} from '../../Services/Api';
import {Colors} from '../../utils/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../Store/General';
import {useNavigation} from '@react-navigation/native';
import Space from '../../components/Space';

const YachatCard = ({searchQuery, selectedSortOption}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const isLoading = useSelector(state => state.general.appLoading);
  useEffect(() => {
    // Fetch yacht data when the component mounts
    fetchYachtData();
  }, [selectedSortOption]);

  const fetchYachtData = async () => {
    dispatch(setLoading(true));
    try {
      const yachtData = await getYachtData();
      const validYachts = yachtData?.yatchs.filter(item => item?.updatedAt);
      const sortedYachts = validYachts?.sort((a, b) => {
        const dateA = new Date(a?.updatedAt);
        const dateB = new Date(b?.updatedAt);
        if (selectedSortOption === 'Newest') {
          return dateB - dateA;
        } else if (selectedSortOption === 'Oldest') {
          return dateA - dateB;
        }

        // Default: sort in descending order
        return dateB - dateA;
      });

      setItems(sortedYachts || []);
    } catch (error) {
      console.log('Error fetching yacht data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const filteredItems = items.filter(item =>
    searchQuery
      ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true,
  );

  const handleEdit = (id, progress) => {
    console.log('id is ' + id, progress);
    setModalVisible(false);
    let screenName = '';

    switch (progress) {
      case 20:
        screenName = 'Addphotos'; // Change this to the actual screen name
        break;
      case 40:
        screenName = 'Pricing'; // Change this to the actual screen name
        break;
      case 60:
        screenName = 'CancellationPolicy'; // Change this to the actual screen name
        break;
      case 80:
        screenName = 'Equipment'; // Change this to the actual screen name
        break;
      default:
        return;
    }
    navigation.navigate('Add yacht', {
      screen: screenName,
      params: {yachtId: id},
    });
  };

  const handleThreeDotsPress = id => {
    setSelectedItemId(id);
    setModalVisible(true);
  };

  const handleDelete = async id => {
    console.log('id to be', id);
    setModalVisible(false);
    dispatch(setLoading(true));
    try {
      await deleteYacht(id);
      // Fetch the updated yacht data after deletion
      const latestYachtData = await getYachtData();
      setItems(latestYachtData?.yatchs || []);
      console.log('Deleted successfully');
    } catch (error) {
      console.log('Error deleting item:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handlePublish = async (yachtId, status) => {
    setModalVisible(false);
    dispatch(setLoading(true));

    try {
      await updateYachtStatus(yachtId, status);
      const latestYachtData = await getYachtData();
      setItems(latestYachtData?.yatchs || []);
    } catch (error) {
      console.log('Error publishing yacht:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const renderItem = ({item}) => {
    //console.log('first', item?.updatedAt);
    let backgroundColorB = 'rgba(255, 0, 0, 0.35)';

    if (item?.progress === 100) {
      backgroundColorB = 'rgba(0, 255, 87, 0.5)';
    }
    if (item?.progress < 100) {
      backgroundColorB = 'rgba(255, 0, 0, 0.35)';
    }
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return null; // Skip rendering if not a match
    }

    return (
      <View style={styles.cardContainer}>
        <View style={styles.inside}>
          <View style={styles.btnw}>
            <View style={styles.insideView}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  marginRight: 5,
                  backgroundColor: backgroundColorB,
                }}
              />
              <Text style={styles.status}>{item?.published_status}</Text>
            </View>
            <Image
              source={require('../../assets/images/unSelect.png')}
              style={[{width: 20, height: 10, marginHorizontal: 5}]}
              resizeMode="contain"
            />
          </View>
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
              <View style={styles.innerView}>
                <Image
                  source={require('../../assets/images/bed.png')}
                  style={[{width: 24, height: 10}]}
                  resizeMode="contain"
                />
                <Text style={styles.country}>{item?.no_of_cabins} |</Text>
                <Image
                  source={require('../../assets/images/captian.png')}
                  style={[{width: 20, height: 10, marginHorizontal: 5}]}
                  resizeMode="contain"
                />
                <Text style={styles.country}>With skippers</Text>
              </View>
              {item?.price_per_hour ? (
                <Text style={styles.price}>
                  From {item?.price_per_hour}Aed per hour
                </Text>
              ) : (
                <Text style={styles.price}>Price not added yet!</Text>
              )}

              <View
                style={{
                  backgroundColor: backgroundColorB,
                  width: 90,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text style={styles.country}>{item?.progress}% Progress</Text>
              </View>
              <TouchableOpacity onPress={() => handleThreeDotsPress(item._id)}>
                <Image
                  source={require('../../assets/images/threedot.png')}
                  style={[
                    {
                      width: 20,
                      height: 10,
                      marginHorizontal: 5,
                      alignSelf: 'flex-end',
                    },
                  ]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
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
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()} // Ensure key is a string
        contentContainerStyle={{marginBottom: 250}}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
            {filteredItems.find(item => item._id === selectedItemId)
              ?.progress != 100 && (
              <TouchableOpacity
                onPress={() =>
                  handleEdit(
                    selectedItemId,
                    filteredItems.find(item => item._id === selectedItemId)
                      ?.progress,
                  )
                }>
                <Text style={styles.modalOptionText}>Edit</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => handleDelete(selectedItemId)}>
              <Text style={styles.modalOptionText}>Delete</Text>
            </TouchableOpacity>
            {filteredItems.find(item => item._id === selectedItemId)
              ?.progress === 100 &&
              filteredItems.find(item => item._id === selectedItemId)
                ?.published_status === 'un-published' && (
                <TouchableOpacity
                  onPress={() => handlePublish(selectedItemId, 'publish')}>
                  <Text style={styles.modalOptionText}>Publish</Text>
                </TouchableOpacity>
              )}
            {filteredItems.find(item => item._id === selectedItemId)
              ?.published_status === 'published' && (
              <TouchableOpacity
                onPress={() => handlePublish(selectedItemId, 'un-publish')}>
                <Text style={styles.modalOptionText}>Unpublish</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default YachatCard;
