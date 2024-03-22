import fonts from '../../assets/fonts';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';

export const styles = {
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.lightWhite,
    borderRadius: 15,

    width: wp(80),
    alignSelf: 'center',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedTab: {
    backgroundColor: Colors.mainBlue,
    borderRadius: 15,
  },
  unselectedTab: {
    backgroundColor: Colors.lightWhite,
    borderRadius: 15,
  },
  selectedText: {
    color: 'white',
    fontFamily: fonts.medium,
    fontSize: FontSize.small,
  },
  unselectedText: {
    color: Colors.gray,
    fontFamily: fonts.medium,
    fontSize: FontSize.small,
  },
};
