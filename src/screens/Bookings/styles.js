import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  bottomBar: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  topSection: {
    height: 260,
    backgroundColor: '#246bbc',
  },
  locationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 0,
    marginRight: 8,
  },
  locationText: {
    paddingHorizontal: 8,
  },
  location: {
    color: '#ffffff',
  },
  label: {
    paddingLeft: 16,
  },
  searchField: {
    marginHorizontal: 24,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchIcon: {
    flex: 1,
    margin: 16,
    width: 20,
    height: 22,
  },
  searchLabel: {
    margin: 16,
    flex: 1,
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    backgroundColor: '#eeeeee',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  carousel: {
    flexGrow: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    width: 160,
    height: 120,
    borderRadius: 10,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255, 0.9)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 60,
    // backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftComponent: {
    marginTop: 8,
    marginLeft: 20,
  },
  title: {
    color: 'rgba(0,0,0, 0.7)',
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightComponent: {
    marginRight: 36,
  },
  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
};
