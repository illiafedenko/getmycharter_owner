import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const MessageScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Chat');

  const handleTabPress = tab => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Chat' ? styles.selectedTab : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('Chat')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Chat'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            Chat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabItem,
            selectedTab === 'Booking Request'
              ? styles.selectedTab
              : styles.unselectedTab,
          ]}
          onPress={() => handleTabPress('Booking Request')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'Booking Request'
                ? styles.selectedText
                : styles.unselectedText,
            ]}>
            Booking Request
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    paddingVertical: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedTab: {
    backgroundColor: 'blue',
  },
  unselectedTab: {
    backgroundColor: 'skyblue',
  },
  selectedText: {
    color: 'white',
  },
  unselectedText: {
    color: 'gray',
  },
});

export default MessageScreen;
