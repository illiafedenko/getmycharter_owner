import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import {Colors} from '../../utils/Colors';
import {hp, wp} from '../../utils/Dimensions';
import {FontSize} from '../../utils/FontSize';
import fonts from '../../assets/fonts';

const BookingContactScreen = ({navigation}) => {
  const [message, setMessage] = useState('');

  const handleSubmission = () => {
    // Handle the submission logic here
    console.log('Message submitted:', message);
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        backgroundColor={Colors.white}
        source={require('../../assets/images/backIcon.png')}
        onPress={() => navigation.goBack()}
        label={'Contact'}
        styleIcon={{width: wp(7), height: hp(10)}}
        height={hp(11)}
        elevation={5}
        showLabel={true}
        showImg={true}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section 1 */}
        <View style={styles.section}>
          <View style={styles.center}>
            <View>
              <Text style={styles.username}>Fahad Mahmood</Text>
              <Text style={styles.normalText}>5 bookings</Text>
            </View>

            <Image
              source={{
                uri: 'https://media.fraseryachts.com/Yachts/Y692_KrB_MC/images/website/ARROW_Drone_3413+1-jDu6XGHm.jpg?vh=3b7da0&w=1500&h=758&func=crop&gravity=center&wat=1&wat_gravity=southwest&wat_scale=80&wat_pad=20',
              }}
              style={styles.userImage}
            />
          </View>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>

        {/* Section 2 */}
        <View style={styles.section}>
          <View style={styles.center}>
            <Text style={styles.dateTime}>From:</Text>
            <Text style={styles.normalText}>2023-11-12 10:00 AM</Text>
          </View>
          <View style={styles.center}>
            <Text style={styles.dateTime}>To:</Text>
            <Text style={styles.normalText}>2023-11-12 12:00 PM</Text>
          </View>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>
        {/* Section 3 */}
        <View style={styles.section}>
          <View style={styles.center}>
            <Text style={styles.username}> $50</Text>
            <Text style={styles.normalText}>Either $25 / hr</Text>
          </View>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>
        {/* Section 4 */}
        <View
          style={[
            styles.section,
            {
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.approvalStatus}>Ready to Approve</Text>
          <Image source={require('../../assets/images/left.png')} />
          <Text style={styles.Status}>Approved</Text>
        </View>
        <View style={styles.dottedView}>
          <View style={styles.verticalLine} />
        </View>
        {/* Section 5 */}
        <View style={styles.section}>
          <Text style={[styles.username, {marginVertical: hp(2)}]}>
            Message
          </Text>
          <TextInput
            style={styles.messageInput}
            multiline
            numberOfLines={4}
            placeholder="Write your message here..."
            value={message}
            onChangeText={text => setMessage(text)}
          />
        </View>
      </ScrollView>

      {/* Submit Button */}

      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.addButton} onPress={handleSubmission}>
          <Text style={styles.addButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Light gray background
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  section: {
    paddingVertical: 5,
    paddingHorizontal: wp(7),
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: FontSize.regular,
    fontFamily: fonts.bold,
    color: Colors.mainBlue,
  },
  normalText: {
    fontSize: FontSize.small,
    fontFamily: fonts.medium,
    color: Colors.black, // Custom medium text color
  },
  center: {
    marginVertical: hp(1),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateTime: {
    fontSize: FontSize.small,
    color: Colors.mainBlue,
    fontFamily: fonts.light,
  },
  price: {
    fontSize: 16,
    color: '#4CAF50', // Green text
  },
  approvalStatus: {
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    color: Colors.green,
  },
  Status: {
    fontSize: FontSize.small,
    fontFamily: fonts.bold,
    color: Colors.yelloish,
  },
  messageHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  messageInput: {
    height: hp(15),
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  dottedView: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1, // Height of the line
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#003580', // Color of the dots
    borderStyle: 'dashed',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: wp(2), // Adjust the padding as needed

    backgroundColor: Colors.white,
    borderTopWidth: 0.5,
    borderTopColor: Colors.gray, // Adjust the color as needed
    position: 'absolute',
    ...Platform.select({
      android: {
        elevation: 5,

        overflow: 'hidden', // Required to clip the content within the rounded corners
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
    bottom: 0,
    left: 0,
    right: 0,
  },

  addButton: {
    //  flex: 1,
    backgroundColor: Colors.shineBlue,
    flexDirection: 'row',
    borderRadius: 5,
    width: wp(45),
    height: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    margin: wp(4),
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: FontSize.small,

    fontFamily: fonts.bold,
  },
});

export default BookingContactScreen;
