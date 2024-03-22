import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imgstyle: {
    width: '60%',
    alignSelf: 'center',
    marginTop: hp(6),
  },
  mg5: {
    marginHorizontal: wp(5),
  },
  texth1: {
    marginTop: hp(2),
    fontSize: FontSize.medium,
    fontFamily: fonts.boldInter,
    color: Colors.blackApp,
    alignSelf: 'center',
  },
  texth2: {
    fontSize: FontSize.tiny,
    fontFamily: fonts.mediumInter,
    color: Colors.lightBlack,
    textAlign: 'center',
    alignSelf: 'center',
    width: '75%',
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
    justifyContent: 'space-between',
    width: '75%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  line: {
    height: 0.75,
    backgroundColor: Colors.fieldColor,
    width: '40%',
  },
  orText: {
    color: 'black',
    fontSize: FontSize.small,
    fontFamily: fonts.regular,
  },
  terms: {
    color: Colors.mainBlue,
    fontFamily: fonts.mediumInter,
    fontSize: FontSize.tiny,
    textDecorationLine: 'underline',
  },
  description: {
    color: Colors.blackApp,
    fontFamily: fonts.mediumInter,
    opacity: 0.73,
    alignSelf: 'center',
    fontSize: FontSize.tiny,
  },
};
