import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  label: {
    color: '#000000',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.tiny,
    marginVertical: 8,
  },
  inputText: {
    borderWidth: 1,
    borderColor: 'rgba(52, 58, 64, 0.68)',
    borderRadius: 10,
    color: Colors.black,
    paddingLeft: 10,
    height: 40,
    marginBottom: 10,
  },

  inputTextPass: {
    borderWidth: 1,
    borderColor: 'rgba(52, 58, 64, 0.68)',
    borderRadius: 10,
    color: Colors.black,
    paddingLeft: 10,
    height: 40,
  },

  labelPass: {
    color: Colors.Blue,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
  },

  labelPass: {
    color: Colors.black,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
  },

  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  eyeIconText: {
    fontSize: 20,
  },
  imgStyle: {
    height: 43,
    width: 18,
  },
  texth2: {
    color: 'black',
    left: wp(3),
  },
  validationItem: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: wp(2),
  },
  iconStyle: {
    height: hp(3),
    width: wp(6),
  },
};
