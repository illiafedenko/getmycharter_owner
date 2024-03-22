import React, {useState} from 'react';
import {
  View,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value for transparency
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
  },
  optionItem: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderBottomWidth: 1, // Add a border bottom
    borderBottomColor: '#ccc', // Choose the color you prefer
  },
});

const FilterModal = ({visible, onFilter, onClose, filterType, options}) => {
  const [selectedOption, setSelectedOption] = useState('');

  const closeModal = () => {
    // Call onClose when clicking outside the modal
    onClose();
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() => {
                      onFilter(item);
                      setSelectedOption(item);
                      closeModal(); // Close the modal when an option is selected
                    }}
                    style={[
                      styles.optionItem,
                      {
                        backgroundColor:
                          selectedOption === item ? 'lightblue' : 'white',
                      },
                    ]}>
                    <Text style={{color: 'black'}}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default FilterModal;
