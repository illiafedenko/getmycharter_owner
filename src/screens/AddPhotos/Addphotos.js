import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import DraggableFlatList from 'react-native-draggable-flatlist';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {hp, wp} from '../../utils/Dimensions';
import {Colors} from '../../utils/Colors';
import fonts from '../../assets/fonts';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontSize} from '../../utils/FontSize';
import Space from '../../components/Space';
import Savebtn from '../../components/Savebtn/Savebtn';
import Toast from 'react-native-simple-toast';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {uploadYachtPhotos} from '../../Services/Api';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../Store/General';

const Addphotos = ({route}) => {
  const dispatch = useDispatch();
  const {yachtId} = route.params;
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([{id: 'cover', path: null}]);
  const [additionalPhotos, setAdditionalPhotos] = useState([]);
  const [coverPhotoUploaded, setCoverPhotoUploaded] = useState(false);

  const [boatPlan, setBoatPlan] = useState({id: 'boatPlan', path: null});

  const callApi = async () => {
    try {
      const allPhotos = [...photos, ...additionalPhotos];

      //   console.log('allPhotos', allPhotos);
      // const missingImages = allPhotos.slice(1).filter(photo => !photo.path);
      const validPhotos = allPhotos.filter(photo => photo.path);
      console.log('validPhotos', validPhotos);
      if (allPhotos.length < 5) {
        // Check if cover photo, boat plan, and all other photos are uploaded
        Toast.show(
          'Please upload at least 4 additional photos,and also cover photo.',
        );
        return;
      }

      dispatch(setLoading(true));
      yachtId, photos, boatPlan;

      const response = await uploadYachtPhotos(yachtId, validPhotos);

      if (response && response.status === 201) {
        dispatch(setLoading(false));
        Toast.show('Successfully created, Add more information!');

        // Redirect or perform other actions on success
        navigation.replace('Pricing', {yachtId: response?.data?.yatch?._id});
      } else {
        // Handle API error
        // You can check response.data for more details on the error
        dispatch(setLoading(false));

        Toast.show('Error submitting Photos. Please try again.');
      }
    } catch (error) {
      console.log('API Error:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const validateAndSetPhoto = async (boxId, image) => {
    try {
      if (image.width < 400 || image.height < 400) {
        Toast.show('Minimum size for uploading photo is 400x400 pixels');
        return;
      }

      if (!['image/jpeg', 'image/png', 'image/gif'].includes(image.mime)) {
        Toast.show('Invalid file format. Only JPEG, PNG, and GIF are allowed.');
        return;
      }

      const updatedPhotos = photos.map(photo =>
        photo.id === boxId ? {...photo, path: image.path} : photo,
      );
      if (boxId === 'cover') {
        setCoverPhotoUploaded(true);
      }
      setPhotos(updatedPhotos);
    } catch (error) {
      console.log(error);
    }
  };

  const validateAndSetBoatPlan = async image => {
    try {
      if (image.width < 400 || image.height < 400) {
        Toast.show('Minimum size for uploading photo is 400x400 pixels');
        return;
      }

      if (!['image/jpeg', 'image/png', 'image/gif'].includes(image.mime)) {
        Toast.show('Invalid file format. Only JPEG, PNG, and GIF are allowed.');
        return;
      }

      setBoatPlan({id: 'boatPlan', path: image.path});
    } catch (error) {
      console.log(error);
    }
  };

  const pickPhotoForBox = async boxId => {
    try {
      const image = await ImagePicker.openPicker({
        // width: 200,
        // height: 200,
        includeBase64: true,

        // cropping: true,
      });

      validateAndSetPhoto(boxId, image);
    } catch (error) {
      console.log(error);
    }
  };

  const pickBoatPlan = async () => {
    try {
      const image = await ImagePicker.openPicker({
        // width: 200,
        // height: 200,
        // cropping: true,
        includeBase64: true,
      });

      validateAndSetBoatPlan(image);
    } catch (error) {
      console.log(error);
    }
  };
  const addMorePhotos = async () => {
    try {
      const images = await ImagePicker.openPicker({
        multiple: true,
        includeBase64: true,
      });

      // Validate and set additional photos
      const filteredImages = images.filter(
        image =>
          image.width >= 400 &&
          image.height >= 400 &&
          ['image/jpeg', 'image/png', 'image/gif'].includes(image.mime),
      );

      // Generate new photo objects with unique IDs
      const newPhotos = filteredImages.map((image, index) => ({
        id: `${index + 1}`, // Use a unique identifier for additional photos
        path: image.path,
      }));

      // Update the state with the new photos
      setAdditionalPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
    } catch (error) {
      console.log(error);
    }
  };

  const renderAdditionalPhotos = () => (
    <ScrollView horizontal style={styles.additionalPhotosContainer}>
      {additionalPhotos.map((photo, index) => (
        <TouchableOpacity
          key={index}
          style={styles.additionalPhotoBox}
          onPress={() => pickPhotoForBox(index + 1)}>
          {photo.path ? (
            <FastImage source={{uri: photo.path}} style={styles.coverImage} />
          ) : (
            // Render placeholder or upload icon for additional photos
            <Image
              source={require('../../assets/images/camIcon.png')}
              style={styles.coverImageicon}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderCoverPhotoSection = () => (
    <View style={styles.photoContainer}>
      <Text style={styles.headerText}>
        Drag and drop or{' '}
        <Text
          onPress={() => pickPhotoForBox('cover')}
          style={[styles.headerText, {color: '#246BBC'}]}>
          click here
        </Text>{' '}
        to upload your photos
      </Text>

      <Text style={styles.instructionText}>
        For the cover, choose a photo that shows the whole boat. Then add more
        photos of the details and the interior.
      </Text>
      <Text style={styles.dragText}>
        Drag the photos to change the order they appear in.
      </Text>
      <TouchableOpacity
        style={styles.coverContainer}
        onPress={() => pickPhotoForBox('cover')}>
        {photos[0].path ? (
          <>
            <FastImage
              source={{
                uri: photos[0].path,
                priority: FastImage.priority.normal,
              }}
              style={styles.coverImage}
            />
          </>
        ) : (
          <>
            <Image
              source={require('../../assets/images/camIcon.png')}
              style={styles.coverImageicon}
              resizeMode="contain"
            />
            <Text style={styles.coverText}>Post your photos here</Text>
            <Text style={styles.coverTextFor}>Minimum size: 400x400px</Text>
            <Text style={styles.coverTextFor}>Format: jpeg, png, gif</Text>
            <Text style={styles.coverTextUp}>Upload from your device</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );

  const renderBoatPhoto = () => (
    <View style={styles.photoContainer}>
      <Text style={styles.headerText}>Boat plan</Text>

      <Text style={styles.instructionText}>
        Add boat design plan so renters can project themselves.
      </Text>

      <TouchableOpacity style={styles.coverContainer} onPress={pickBoatPlan}>
        {boatPlan.path ? (
          <FastImage source={{uri: boatPlan.path}} style={styles.coverImage} />
        ) : (
          <>
            <Image
              source={require('../../assets/images/camIcon.png')}
              style={styles.coverImageicon}
              resizeMode="contain"
            />
            <Text style={styles.coverText}>Drag the boat design plan here</Text>
            <Text style={styles.coverTextFor}>Minimum size: 400x400px</Text>
            <Text style={styles.coverTextFor}>Format: jpeg, png, gif</Text>
            <Text style={styles.coverTextUp}>Upload from your device</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.containerMain}>
      <CustomHeader
        backgroundColor={Colors.white}
        label={'Photos'}
        elevation={5}
        showLabel={true}
        showImg={false}
      />
      <Space height={15} />

      <KeyboardAwareScrollView>
        <View style={styles.container}>
          {renderCoverPhotoSection()}
          {renderAdditionalPhotos()}
          {coverPhotoUploaded && (
            <TouchableOpacity onPress={addMorePhotos}>
              <Text style={styles.addMoreButtonText}>Add More Photos</Text>
            </TouchableOpacity>
          )}
          <Savebtn
            onPress={callApi}
            label={'Save'}
            customStyle={{marginTop: 30}}
          />
          {/* {renderBoatPhoto()} */}
        </View>
        <Space height={hp(20)} />
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
  },
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerText: {
    fontSize: 15,
    fontFamily: fonts.poppinMedium,
    color: '#343A40',
  },
  instructionText: {
    fontSize: 10,
    fontFamily: fonts.regularInter,
    marginVertical: 10,
    color: '#3A3A3A',
  },
  dragText: {
    fontSize: 12,
    fontFamily: fonts.regularInter,
    marginVertical: 10,
    color: '#3A3A3A',
  },
  photoContainer: {},
  coverContainer: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  coverImageicon: {
    width: 22,
    height: 16,
  },
  coverText: {
    fontSize: FontSize.tiny,
    color: '#343A40',
    fontFamily: fonts.mediumInter,
    marginVertical: 4,
  },

  coverTextFor: {
    fontSize: FontSize.vtiny,
    color: '#343A40',
    fontFamily: fonts.regularInter,
    marginVertical: 2,
  },
  coverTextUp: {
    fontSize: FontSize.tiny,
    color: Colors.bliush,
    fontFamily: fonts.mediumInter,
    marginVertical: 2,
    textDecorationLine: 'underline',
  },
  photoBox: {
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    width: 80,
    height: 100,
    margin: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  uploadText: {
    fontSize: 12,
    color: '#8A98A6',
    marginVertical: 5,
    alignSelf: 'center',
  },

  addMoreButtonText: {
    color: 'black',
    fontFamily: fonts.mediumInter,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  additionalPhotosContainer: {
    marginTop: 15,
    marginBottom: 10,
  },
  additionalPhotoBox: {
    width: 80,
    height: 100,
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#DEDEDE',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Addphotos;
