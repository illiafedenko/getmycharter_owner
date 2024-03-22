import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  instructionText: {
    fontSize: 16,
    fontFamily: fonts.boldInter,
    marginVertical: 10,
    color: '#383C40',
  },
  dragText: {
    fontSize: 13,
    fontFamily: fonts.regularInter,
    marginVertical: 10,
    color: '#747474',
  },
  mainCon: {
    paddingHorizontal: '5%',
  },
  customInput: {
    borderWidth: 0,
  },
};
