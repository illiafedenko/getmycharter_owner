import React from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import FastImage from 'react-native-fast-image';

const SuccessModal = ({
  isVisible,
  closeModal,
  onPressLeft,
  onPressRight,
  showLeftBtn,
  label,
  btnTitle,
  Description,
  rightTitle,
  showRightBtn,
  source,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{label}</Text>
          <Text style={styles.modalTitleDes}>{Description}</Text>
          <FastImage
            source={source}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <View style={styles.row}>
            {showLeftBtn && (
              <TouchableOpacity style={styles.addButton} onPress={onPressLeft}>
                <Text style={styles.addButtonText}>{btnTitle}</Text>
              </TouchableOpacity>
            )}

            {showRightBtn && (
              <TouchableOpacity style={styles.addButton} onPress={onPressRight}>
                <Text style={styles.addButtonText}>{rightTitle}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
