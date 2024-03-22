import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
import {Platform} from 'react-native';

export const styles = {
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5), // Adjust the padding as needed
    // paddingVertical: hp(1), // Adjust the padding as needed
    backgroundColor: Colors.white,
    borderTopWidth: 0.5,
    borderTopColor: Colors.gray, // Adjust the color as needed
    position: 'absolute',
    ...Platform.select({
      android: {
        elevation: 5,

        overflow: 'hidden', // Required to clip the content within the rounded corners
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
    bottom: 0,
    left: 0,
    right: 0,
  },

  addButton: {
    //  flex: 1,
    //backgroundColor: Colors.shineBlue,
    flexDirection: 'row',
    //borderRadius: 10,
    // width: wp(30),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    alignContent: 'center',
    margin: wp(4),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.small,

    fontFamily: fonts.bold,
  },

  iconstyle: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
};
