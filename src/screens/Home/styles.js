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
  containerInfo: {
    width: '24%',
    alignItems: 'center',
    paddingRight: 2,
    borderRightWidth: 1,
  },
  innerView: {
    //height: '30',
    borderRadius: 10,
    backgroundColor: '#20A84E',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  insideCard: {
    width: '25%',
    alignItems: 'center',
    paddingRight: 2,
    borderRightWidth: 1,
  },
  card: {
    // height: '30',
    borderRadius: 10,
    backgroundColor: '#FFCE31',
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
};
