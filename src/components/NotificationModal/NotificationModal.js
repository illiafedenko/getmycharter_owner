import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const NotificationModal = ({modalVisible, closeModal}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headingView}>
            <Text style={styles.modalTitle}>"easycharter.booking.com"</Text>
            <Text style={styles.modalTitle}>Would Like to</Text>
            <Text style={styles.modalTitle}>Send you Notifications</Text>
            <Text style={styles.modalSubtitle}>
              Notifications may include alerts, sound, and icon badges. These
              can be configured in settings.
            </Text>
          </View>
          <View style={styles.line} />
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={closeModal} style={styles.btnStyle}>
              <Text style={styles.BtnText}>Don't Allow</Text>
            </TouchableOpacity>
            <View style={styles.verticalLine} />
            <TouchableOpacity onPress={closeModal} style={styles.btnStyle}>
              <Text style={styles.BtnText}>Allow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
