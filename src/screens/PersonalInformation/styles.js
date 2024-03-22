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
    fontSize: 16,
    fontFamily: fonts.boldInter,
    paddingVertical: 20,
  },
  h2Text: {
    color: '#000000',
    fontSize: 12,
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
    color: '#3A3A40',
    fontFamily: fonts.semiInter,
    fontSize: fonts.tiny,
  },

  dpIcon: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignSelf: 'center',
  },

  customInput: {
    borderColor: '#CED4DA',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    color: '#000000',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.tiny,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#CED4DA',
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    height: 250,
  },
  option: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  company: {
    color: '#343A40',
    fontFamily: fonts.boldInter,
    fontSize: 16,
    marginVertical: 10,
  },
};
