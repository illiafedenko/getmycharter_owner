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
  boxview: {
    height: 380,
    width: '100%',
    borderWidth: 1,
    borderColor: '#A9B4BE',
    borderRadius: 15,
    alignItems: 'center',
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
  h2Text: {
    color: '#343A40',
    fontSize: FontSize.tiny,
    fontFamily: fonts.boldInter,
    paddingVertical: 5,
    alignSelf: 'center',
  },

  h3Text: {
    color: '#343A40',
    fontSize: FontSize.vtiny,
    fontFamily: fonts.regularInter,

    alignSelf: 'center',
  },
  h2: {
    color: '#B6B9BC',
    fontFamily: fonts.mediumInter,
    fontSize: FontSize.regular,
  },

  h3: {
    color: '#246BBC',
    fontFamily: fonts.mediumInter,
    fontSize: FontSize.tiny,
    marginVertical: 10,
  },
  mianBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#A9B4BE',
    padding: 5,
    margin: 20,
  },
  h4: {
    color: '#A9B4BE',
    fontFamily: fonts.semiInter,
    fontSize: FontSize.small,
    paddingBottom: 10,
  },

  dpIcon: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },

  customInput: {
    borderColor: '#CED4DA',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: '#A9B4BE',
    borderRadius: 2,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: FontSize.small,
    color: '#343A40',
    opacity: 0.58,
  },

  mainView: {
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 10,
    color: Colors.black,
    paddingLeft: 10,
    height: hp(6),
    marginBottom: 10,
    alignContent: 'center',
    flexDirection: 'row',
  },
  chooseBtn: {
    borderWidth: 1,
    borderColor: Colors.black,
    width: 90,
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    borderRadius: 2,
  },
  csnText: {
    color: 'black',
    fontFamily: fonts.mediumInter,
    fontSize: FontSize.tiny,
    alignSelf: 'center',
  },
  nofile: {
    color: 'black',
    fontFamily: fonts.mediumInter,
    alignSelf: 'center',
    left: 15,
    fontSize: FontSize.tiny,
  },
};
