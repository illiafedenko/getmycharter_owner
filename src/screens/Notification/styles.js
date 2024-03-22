import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.mainBlue,
  },

  mg5: {marginHorizontal: wp(5), marginTop: hp(2)},
  texth1: {
    fontSize: FontSize.medium,
    fontFamily: fonts.bold,
    color: Colors.white,
  },
  texth2: {
    fontSize: FontSize.tiny,
    fontFamily: fonts.regular,
    color: Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: wp(5),
    width: wp(75),
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: FontSize.regular,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: fonts.bold,
    color: 'black',
  },
  modalSubtitle: {
    textAlign: 'center',
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: FontSize.small,
    margin: hp(2),
  },
  modalButtonContainer: {
    width: '100%',
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    // marginVertical: 10,
  },
  BtnText: {
    color: Colors.mainBlue,
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    textAlign: 'center',
  },

  line: {
    height: 1,
    backgroundColor: 'lightgray',
    width: '100%',
  },
  verticalLine: {
    height: 60,
    width: 1,
    backgroundColor: 'lightgray',
  },
  btnStyle: {
    width: '50%',
    height: hp(5),
    justifyContent: 'center',
  },
  headingView: {
    marginTop: hp(2),
  },
};
