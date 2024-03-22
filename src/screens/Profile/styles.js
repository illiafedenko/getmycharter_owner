import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(70),
    alignSelf: 'center',
    marginHorizontal: hp(2),

    marginBottom: hp(3),
  },
  hidingh1: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    textAlign: 'center',
    color: Colors.shineBlue,
  },
  hidingh2: {
    fontSize: FontSize.regular,
    fontFamily: fonts.light,
    textAlign: 'center',
    color: Colors.shineBlue,
  },
};
