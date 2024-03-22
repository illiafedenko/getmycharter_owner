import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mg5: {marginHorizontal: wp(5)},
  texth1: {
    marginTop: hp(2),
    fontSize: FontSize.medium,
    fontFamily: fonts.bold,
    color: Colors.black,
  },
  texth2: {
    fontSize: FontSize.tiny,
    fontFamily: fonts.regular,
    color: Colors.lightBlack,
    marginBottom: hp(2),
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
    width: 1,
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
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp(50),
    alignSelf: 'center',
    alignItems: 'center',
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightBlack,
    width: wp(12),
  },
  orText: {
    color: 'black',
    fontSize: FontSize.small,
    fontFamily: fonts.regular,
  },
  terms: {
    color: '#246bbc',
    fontFamily: fonts.regular,
    fontSize: FontSize.tiny,
  },
  description: {
    color: 'grey',
    fontSize: 14,
    fontFamily: fonts.regular,
    alignSelf: 'center',
    fontSize: FontSize.tiny,
  },
};
