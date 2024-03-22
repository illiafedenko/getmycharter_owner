import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  modalTitle: {
    fontSize: FontSize.large,
    fontFamily: fonts.bold,
    textAlign: 'center',

    color: 'black',
    width: wp(60),
    marginBottom: 20,
  },
  modalTitleDes: {
    fontSize: FontSize.regular,
    fontFamily: fonts.light,
    textAlign: 'center',

    color: 'black',
    width: wp(60),
  },
  modalImage: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  addButton: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    borderRadius: 50,
    width: '40%',
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    margin: wp(2),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.small,

    fontFamily: fonts.bold,
  },
  row: {
    flexDirection: 'row',
  },
};
