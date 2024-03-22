import {color} from 'react-native-elements/dist/helpers';
import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
export const styles = {
  containerMain: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingHorizontal: '5%',
  },
  customInput: {
    borderColor: '#CED4DA',
  },
  autocompleteContainer: {
    flex: 1,
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    marginBottom: hp(1.5),
  },
  input: {
    borderWidth: 1,
    borderColor: '#CED4DA',
    height: 30,
    width: 59,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'black',
    fontSize: 10,
  },
  unit: {
    alignSelf: 'center',
    color: 'black',
    fontSize: FontSize.vtiny,
    fontFamily: fonts.regularInter,
  },
  inputRow: {
    flexDirection: 'row',
  },
  label: {
    color: '#000000',
    fontFamily: fonts.regularInter,
    fontSize: FontSize.tiny,
    marginVertical: 8,
  },
  unitView: {
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#F9FAFD',
    borderColor: '#CED4DA',
    marginRight: 23,
    height: 30,
    width: 31,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  autocompleteContainer: {
    flex: 1,
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 222,
    width: '100%',
    marginBottom: hp(1.5),
    // borderWidth: 1,
    // borderColor: Colors.black,
    //borderRadius: 10,
  },
};
