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
    paddingHorizontal: 30,
  },
  innerView: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {width: 28, height: 28},
  txt: {
    left: 10,
    color: '#544C4C',
    fontSize: FontSize.tiny,
    fontFamily: fonts.mediumInter,
  },
  labelText: {
    color: '#343A40',
    fontSize: FontSize.medium,
    fontFamily: fonts.boldInter,
    marginBottom: 23,
  },
  customInput: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  btn: {
    alignSelf: 'center',
    width: '100%',
  },
};
