import {color} from 'react-native-elements/dist/helpers';
import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
import {Platform} from 'react-native';
export const styles = {
  constScroll: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    hp: hp(100),
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Colors.shineBlue,
    flexDirection: 'row',
    borderRadius: 10,
    width: wp(40),
    hp: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    alignContent: 'center',
    margin: wp(4),
  },

  addButtonEdit: {
    backgroundColor: Colors.green,
    flexDirection: 'row',
    borderRadius: 10,
    width: wp(20),
    hp: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(0.5),
    margin: wp(4),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.small,
    marginVertical: 5,
    fontFamily: fonts.bold,
  },
  addButtonTextBtn: {
    color: '#ffffff',
    fontSize: FontSize.tiny,
    //marginVertical: 5,
    fontFamily: fonts.medium,
  },
  cardContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    ...Platform.select({
      android: {
        elevation: 5,
        borderRadius: 10,
        overflow: 'hidden', // Required to clip the content within the rounded corners
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {wp: 0, hp: 0},
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 8,
      },
    }),
  },
  inside: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#fff',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 0,
  },
  cardView: {
    //flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '35%',
    height: 100,
    borderRadius: 5,
  },
  rating: {
    // marginLeft: 10,
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
  imgStyle: {
    width: wp(8),
    height: hp(4),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  name: {
    fontSize: FontSize.small,
    fontFamily: fonts.semiInter,
    marginBottom: 2,
    color: '#000000',
    opacity: 0.8,
    width: wp(30),
  },
  name2: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    color: Colors.mainBlue,
    marginBottom: hp(2),
  },
  des: {
    fontSize: FontSize.small,
    fontFamily: fonts.regular,
    marginBottom: 5,
    color: Colors.black,
    marginBottom: hp(2),
  },
  btnView: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: wp(20),
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    alignSelf: 'center',
  },
  texth1: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    color: Colors.black,
  },

  customInput: {
    width: wp(70),
    height: hp(20),
    borderColor: Colors.black,
    borderRadius: 10,
    paddingHorizontal: wp(4),
    color: Colors.black,
    borderWidth: 1,
  },
  customInputTitle: {
    width: wp(70),
    // height: hp(4),
    paddingHorizontal: wp(2),
    borderColor: Colors.mainBlue,
    borderRadius: 10,
    color: Colors.black,
    borderWidth: 1,
  },
  labelText: {
    color: Colors.mainBlue,
    fontFamily: fonts.bold,
    fontSize: FontSize.tiny,
  },
  limitText: {
    color: Colors.black,
    fontFamily: fonts.light,
    fontSize: FontSize.tiny,
    alignSelf: 'center',
    width: wp(70),
    textAlign: 'right',
    marginVertical: hp(1),
  },

  containerupload: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginVertical: 20,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  imageBox: {
    width: 150,
    hp: 150,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImage: {
    width: 150,
    hp: 150,
    marginVertical: 5,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContainerUpload: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContent: {
    backgroundColor: Colors.mainBlue,
    margin: hp(2),
    padding: wp(5),
    flex: 0.85,
    borderRadius: 8,
  },
  modalContentUpload: {
    backgroundColor: Colors.mainBlue,
    margin: hp(2),
    padding: wp(5),
    flex: 0.25,
    justifyContent: 'flex-end',
    borderRadius: 8,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  acceptButton: {
    backgroundColor: '#454B1B',
    paddingVertical: hp(1),
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  uploadButtons: {
    backgroundColor: 'grey',
    //  padding: hp(1),
    justifyContent: 'center',
    borderRadius: 5,
  },
  rejectButton: {
    backgroundColor: 'red',
    paddingVertical: hp(1),
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  boxStyle: {
    width: 125,
    height: 125,
    margin: 15,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.mainBlue,
    borderStyle: 'dashed',
    borderRadius: 15,
  },
  centered: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  loadingContainer: {
    flex: 1,
    marginTop: hp(10),
  },
  noDataContainer: {
    flex: 1,
    marginTop: hp(10),
    alignSelf: 'center',
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noimg: {
    fontSize: 10,
    alignSelf: 'center',
    width: '35%',
    color: 'black',
    paddingHorizontal: 20,
  },
  country: {
    fontSize: 10,
    fontFamily: fonts.regularInter,
    color: '#000000',
    opacity: 0.7,
    paddingVertical: 2,
  },
  innerView: {flexDirection: 'row', alignItems: 'center'},
  price: {
    color: '#000000',
    fontSize: FontSize.tiny,
    fontFamily: fonts.mediumInter,
    opacity: 0.8,
    marginVertical: 5,
  },
  status: {
    fontSize: 8,
    color: '#000000',
    fontFamily: fonts.mediumInter,
  },
  btnw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  insideView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    // Styles for the options view
    position: 'absolute',
    right: 10,
    top: 0, // Adjust the top value based on your layout
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 5,
    zIndex: 5,
    borderWidth: 1,
  },

  optionText: {
    // Styles for each option text
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },

  modalCloseButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },

  modalCloseText: {
    color: 'black',
  },

  modalOptionText: {
    color: 'black',
    padding: 15,
    fontSize: 16,
  },
};
