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
    top: '10%', // Adjust this value to control the distance from the button
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
};
