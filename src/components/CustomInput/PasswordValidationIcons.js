import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

const PasswordValidationIcons = ({
  minLength,
  hasNumber,
  hasLowerCase,
  hasUpperCase,
}) => {
  return (
    <View style={styles.validationIcons}>
      <View style={styles.validationIcons}>
        <View style={styles.validationItem}>
          {minLength ? (
            <>
              <Image
                source={require('../../assets/images/yes.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>Minimum 10 characters</Text>
            </>
          ) : (
            <>
              <Image
                source={require('../../assets/images/crossIconc.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>Minimum 10 characters</Text>
            </>
          )}
        </View>

        <View style={styles.validationItem}>
          {hasNumber ? (
            <>
              <Image
                source={require('../../assets/images/yes.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>Contains at least one number</Text>
            </>
          ) : (
            <>
              <Image
                source={require('../../assets/images/crossIconc.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>Contains at least one number</Text>
            </>
          )}
        </View>

        <View style={styles.validationItem}>
          {hasLowerCase ? (
            <>
              <Image
                source={require('../../assets/images/yes.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>
                Contains at least one lowercase letter
              </Text>
            </>
          ) : (
            <>
              <Image
                source={require('../../assets/images/crossIconc.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>
                Contains at least one lowercase letter
              </Text>
            </>
          )}
        </View>

        <View style={styles.validationItem}>
          {hasUpperCase ? (
            <>
              <Image
                source={require('../../assets/images/yes.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>
                Contains at least one uppercase letter
              </Text>
            </>
          ) : (
            <>
              <Image
                source={require('../../assets/images/crossIconc.png')}
                style={styles.iconStyle}
                resizeMode="contain"
              />
              <Text style={styles.texth2}>
                Contains at least one uppercase letter
              </Text>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default PasswordValidationIcons;
