import React, {useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import {Colors} from '../../utils/Colors';

const WebViewModal = ({visible, onClose, url}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={Colors.mainBlue} />
          </View>
        )}
        <WebView
          source={{uri: url}}
          style={styles.webview}
          onLoad={handleLoad}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  header: {
    padding: 10,
    paddingTop: 80,
    alignItems: 'flex-end',
  },
  closeButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  webview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8, // Adjust height as needed
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WebViewModal;
