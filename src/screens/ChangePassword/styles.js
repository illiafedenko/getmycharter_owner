import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    //  alignItems: 'center',
  },

  paddingView: {
    paddingHorizontal: 16,
  },
  imgCross: {
    width: 42,
    height: 42,
    alignSelf: 'center',
    marginVertical: 35,
  },
  h1Text: {
    color: '#343A40',
    fontSize: FontSize.regular,
    fontFamily: fonts.boldInter,
    paddingVertical: 20,
  },
  h2: {
    color: 'black',
    fontFamily: fonts.mediumInter,
    fontSize: 13,
  },
  customInput: {
    paddingTop: 10,
    alignContent: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },
};
