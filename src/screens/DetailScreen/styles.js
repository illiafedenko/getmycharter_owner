import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    position: 'relative',
  },
  contentContainerStyle: {flexGrow: 1, overflow: 'scroll', paddingBottom: 80},
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  float: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowLeft: {
    flexDirection: 'row',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
  },
  BtnText: {
    color: Colors.mainBlue,
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
  },
  locText: {
    fontSize: FontSize.small,
    fontFamily: fonts.regular,
    textAlign: 'center',
    color: 'black',
  },
  infoText: {
    fontSize: 12,
    fontFamily: fonts.medium,
    textAlign: 'center',
    color: Colors.black,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: Colors.gray,
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp(2), // Adjust the padding as needed
    paddingVertical: hp(2), // Adjust the padding as needed
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
    backgroundColor: Colors.shineBlue,
    flexDirection: 'row',
    borderRadius: 10,
    width: wp(70),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    marginTop: wp(15),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.small,

    fontFamily: fonts.bold,
  },
};
