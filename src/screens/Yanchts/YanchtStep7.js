import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {styles} from './styles';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import CardInfo from './CardInfo';
import ImagePicker from 'react-native-image-crop-picker';
import BottomView from '../../components/BottomView/BottomView';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const UploadImageView = ({images, handleImageSelection}) => {
  const navigation = useNavigation();

  // const handleCameraOpen = async index => {
  //   try {
  //     const selectedImage = await ImagePicker.openCamera({
  //       multiple: false,
  //       mediaType: 'photo',
  //     });

  //     const updatedImages = [...images];
  //     updatedImages[index] = selectedImage;
  //     setImages(updatedImages);
  //   } catch (error) {
  //     console.log('Error:', error);
  //     closeModal();
  //   }
  // };

  const openPicker = async index => {
    try {
      const selectedImage = await ImagePicker.openPicker({
        multiple: false,
        mediaType: 'photo',
      });

      handleImageSelection(index, selectedImage); // Update the images in the parent component
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };
  const renderImageBoxes = () => {
    return images.map((image, index) => (
      <TouchableOpacity key={index} onPress={() => openPicker(index)}>
        <View style={styles.boxStyle}>
          {console.log('asd', images)}
          {image ? (
            <Image
              source={{uri: image.path}}
              style={{width: 125, height: 125, borderRadius: 15}}
            />
          ) : (
            <Image
              source={require('../../assets/images/plusIcon.png')}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          )}
        </View>
      </TouchableOpacity>
    ));
  };

  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };

  return (
    <View>
      <View>
        <Text style={styles.name2}>Requires a minimum of 4 photos</Text>
        <View style={styles.centered}>{renderImageBoxes()}</View>
      </View>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={closeModal}>
        <View style={styles.modalContainerUpload}>
          <View style={[styles.modalContentUpload]}>
            <TouchableOpacity
              style={{justifyContent: 'flex-end', flexDirection: 'row'}}
              onPress={closeModal}>
              <Image
                source={require('../../assets/images/star.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCameraOpen}
              style={styles.addButton}>
              <Text style={styles.addButtonText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openPicker} style={styles.addButton}>
              <Text style={styles.addButtonText}>Open Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

const YachtStep7 = ({route}) => {
  const {
    AllowdedItems,
    YachatFeatures,
    addressData,
    cancelType,
    description,
    insuraneType,
    title,
  } = route.params;
  console.log('params', route.params);
  const [images, setImages] = useState(Array(4).fill(null));

  const handleImageSelection = (index, selectedImage) => {
    const updatedImages = [...images];
    updatedImages[index] = selectedImage;
    setImages(updatedImages); // Update the images in the state
  };

  const checkAndNavigate = () => {
    const filteredImages = images.filter(img => img !== null);

    if (filteredImages.length === 4) {
      console.log('Selected Images:', filteredImages); // Check if images are correctly set here
      navigation.navigate('YanchtStep8', {
        yachtImages: filteredImages,
        AllowdedItems: AllowdedItems,
        YachatFeatures: YachatFeatures,
        addressData: addressData,
        cancelType: cancelType,
        description: description,
        insuraneType: insuraneType,
        title: title,
      });
    } else {
      Toast.show('Please upload exactly 4 photos', Toast.LONG);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'New Yacht'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />

      <CardInfo
        title={'Yacht photos'}
        desc={
          'It’s important for renters to see your yacht before they request it.'
        }
      />

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <UploadImageView
          images={images}
          handleImageSelection={handleImageSelection}
        />
      </View>

      <BottomView
        onBackPress={() => {
          navigation.goBack();
        }}
        onNextPress={checkAndNavigate}
        showback={true}
      />
    </View>
  );
};

export default YachtStep7;
