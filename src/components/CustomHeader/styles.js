import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(5),
    width: '100%',
    // Add shadow properties for iOS
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Add elevation for Android
    elevation: 2,
  },
  iconStyle: {
    resizeMode: 'contain',
    height: hp(5),
    //width: 5,
  },
  texth1: {
    fontFamily: fonts.boldInter,
    color: '#000000',
    fontSize: 16,
    opacity: 0.8,
  },
};
