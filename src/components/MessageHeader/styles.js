import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  main: {
    backgroundColor: Colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    paddingTop: hp(5),

    width: wp(100),
    borderBottomLeftRadius: 35,
  },
  iconStyle: {
    resizeMode: 'contain',
    height: hp(5),
    width: wp(4),
  },
  texth1: {
    fontFamily: fonts.bold,
    color: Colors.black,
    fontSize: FontSize.small,
  },
  innerView: {
    height: hp(5),
    backgroundColor: Colors.white,
    borderTopRightRadius: 30,
  },
};
