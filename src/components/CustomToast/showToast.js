import Toast from 'react-native-root-toast';

export const showToast = message => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: 'black',
    textColor: 'black',
    opacity: 1,
    containerStyle: {
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    textStyle: {
      fontSize: 16,
      color: 'white',
    },
  });
};
