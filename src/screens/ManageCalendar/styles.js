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
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    position: 'relative',
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      android: {
        elevation: 5,
        borderRadius: 5,
        overflow: 'hidden',
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {wp: 0, hp: 2},
        shadowOpacity: 0.2,
        borderRadius: 10,
        shadowRadius: 8,
      },
    }),
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 5,
  },
  addListingButton: {
    borderRadius: 8,
    height: 40,
    width: 111,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003580',
  },
  addListingText: {
    color: '#fff', // White color (you can customize)
    fontWeight: 'bold',
    fontFamily: fonts.boldInter,
    fontSize: 12,
  },
  centerView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  listingsText: {
    fontSize: 20,
    fontFamily: fonts.semiInter,
    color: '#000000',
    opacity: 0.7,
  },

  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#343A40',
    opacity: 0.74,
    fontSize: 12,
    fontFamily: fonts.mediumInter,
  },

  sortButtonText: {
    fontSize: 14,
    color: Colors.blue, // Change the color as needed
    marginRight: 5,
  },
  sortOption: {
    fontSize: 14,
    color: Colors.black,
    paddingVertical: 5,
  },

  selectAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectAllButtonText: {
    fontSize: 14,
    color: Colors.blue, // Change the color as needed
    marginRight: 5,
  },

  arrowDownIcon: {
    width: 12, // Adjust the width as needed
    height: 12, // Adjust the height as needed
  },

  sortOptionsContainer: {
    position: 'absolute',
    top: '14%', // Adjust this value to control the distance from the button
    right: 15,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 5,
    paddingHorizontal: 20,
    zIndex: 1, // To make sure the options appear above other elements
  },
  btnView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CDCACA',
    borderRadius: 5,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconstyle: {
    width: 10,
    height: 16,
  },
  emtpy: {
    width: '10%',
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
  status: {
    fontSize: 8,
    color: '#000000',
    fontFamily: fonts.mediumInter,
  },
  image: {
    width: '35%',
    height: 130,
    borderRadius: 5,
  },

  name: {
    fontSize: FontSize.small,
    fontFamily: fonts.semiInter,
    marginBottom: 2,
    color: '#000000',
    opacity: 0.8,
    width: wp(30),
  },

  price: {
    color: '#000000',
    fontSize: FontSize.tiny,
    fontFamily: fonts.mediumInter,
    opacity: 0.8,
    marginVertical: 5,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',

    padding: 8,
    justifyContent: 'center',
    //borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: Colors.mainBlue,
    borderRadius: 23,
  },
  heading: {
    fontSize: 12,
    fontFamily: fonts.regularInter,
    color: 'white',
  },
  icon: {
    width: 24, // Adjust size as needed
    height: 24, // Adjust size as needed
    resizeMode: 'contain',
  },
  noDataContainer: {
    flex: 1,
    marginTop: hp(10),
    alignSelf: 'center',
  },
};
