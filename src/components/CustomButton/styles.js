import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderRadius: 20,
    borderColor: Colors.blackApp,
    borderWidth: 1,
  },
  iconStyle: {
    resizeMode: 'contain',
    width: 15,
    height: 15,
    left: 20,
  },
  texth1: {
    fontFamily: fonts.bold,
    color: Colors.white,
    fontSize: FontSize.small,
  },
  btnText: {
    color: Colors.blackApp,
    fontFamily: fonts.semiInter,
    fontSize: 14,
  },
  whiteText: {
    color: Colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
    alignSelf: 'center',
  },
};
