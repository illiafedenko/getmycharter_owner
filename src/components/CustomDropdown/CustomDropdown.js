import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

const CustomDropdown = ({
  label,
  options,
  selectedValue,
  onSelect,
  labelStyle,
  dropdownStyle,
  customStyleText,
  innerStyle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.dropdownContainer, innerStyle]}>
      {label && <Text style={[styles.labelText, labelStyle]}>{label}</Text>}
      <TouchableOpacity
        style={[styles.dropdownInput, dropdownStyle]}
        onPress={() => setModalVisible(true)}>
        <Text
          style={[
            selectedValue
              ? styles.selectedValueText
              : styles.unselectedValueText,
            customStyleText,
          ]}>
          {selectedValue || 'Select'}
        </Text>
        <Image
          source={require('../../assets/images/downIcon.png')}
          style={{width: 10, height: 10}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={item => item.value}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={[
                      styles.modalItem,
                      selectedValue === item.value && styles.selectedItem,
                    ]}
                    onPress={() => {
                      onSelect(item.value);
                      setModalVisible(false);
                    }}>
                    <Text style={{color: 'black'}}>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = {
  dropdownContainer: {
    marginBottom: 20,
  },
  labelText: {
    color: '#000000',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.tiny,
    marginVertical: 8,
  },
  dropdownInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    borderColor: '#CED4DA',
  },
  selectedValueText: {
    flex: 1,
    color: 'black',
  },
  unselectedValueText: {
    flex: 1,
    color: '#343A40',
    opacity: 0.56,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    height: '64%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
  },
  modalItem: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderBottomColor: '#ccc',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center', // Center content horizontally
    borderRadius: 8,
  },
  selectedItem: {
    backgroundColor: 'lightblue', // Change to your desired highlight color
  },
  closeButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
  },
};

export default CustomDropdown;
