import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, View } from 'react-native';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
// import handleErrors from '../../utils/handleErrors';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '@/fb/queries';
import { Colors, themeStyles } from '@/global-styles';
import {
  faCheckCircle,
  faCircle,
  faCircleDot,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, Divider } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './SignUpScreen.styles';
import { UserValidator } from './SignUpScreen.validator';

const ICON_BTN_SIZE = 16;

export const SignUpScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [names, setNames] = useState<string>('');
  const [surnames, setSurnames] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visualizePassword, setVisualizePassword] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : themeStyles.text };

  const requestValidator = new UserValidator();
  // const validator = requestValidator.validate({
  //   userName: 'Vince',
  //   email: 'unaContraseña',
  //   password: 'unPassword',
  // });

  const validator = requestValidator.validate({
    names,
    surnames,
    email,
    password,
  });

  console.log('validator');
  console.log(validator);

  const onSignUpPress = () => {
    if (isEmpty(validator)) {
      setLoader(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async () => {
          await createUserWithRestOfData(auth().currentUser?.uid);

          await resetForm();

          Alert.alert(t('RegistrationCompleted'));
        })
        .catch(error => {
          const errorCode = error.code;
          handleErrors(errorCode);
          setLoader(false);
        });
    } else {
      Toast.showWithGravityAndOffset(
        Object.values(validator)[0] || '',
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -50,
        {
          backgroundColor: themeStyles.error,
          textColor: themeStyles.white,
          tapToDismissEnabled: true,
        },
      );
    }
  };

  const createUserWithRestOfData = async (uid: string | undefined) => {
    setUser(names, surnames, uid);
  };

  const resetForm = async () => {
    console.log('resetForm');
    setLoader(false);
    setEmail('');
    setNames('');
    setSurnames('');
    setPassword('');
  };

  const onPressEye = async () => {
    console.log('onPressEye');
    setVisualizePassword(!visualizePassword);
  };

  const passwordRequirements = [
    'Entre 8 y 20 caracteres',
    'Al menos 1 número',
    'Al menos 1 caracter especial',
    'Al menos 1 letra mayúscula',
    'Al menos 1 letra minúscula',
  ];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.topLabel}>
        <Text style={styles.topLabelText}>{t('CreateAnAccount')}</Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          value={email}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setEmail}
          placeholder={t('Email')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          value={names}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setNames}
          placeholder={t('Names')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          value={surnames}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setSurnames}
          placeholder={t('Surnames')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <View>
          {!validator.password ? (
            <FontAwesomeIcon
              icon={faCheckCircle}
              size={14}
              style={styles.checkIcon}
            />
          ) : null}
          <TextInput
            value={password}
            editable={!loader}
            style={[styles.textInput, textInputColor]}
            onChangeText={setPassword}
            secureTextEntry={!visualizePassword}
            placeholder={t('Password')}
            placeholderTextColor="grey"
            autoCapitalize="none"
            maxLength={20}
          />
          <Button onPress={onPressEye} buttonViewStyle={styles.btnEyeIcon}>
            <FontAwesomeIcon
              icon={visualizePassword ? faEye : faEyeSlash}
              size={ICON_BTN_SIZE}
              style={styles.eyeIcon}
            />
          </Button>
        </View>
        <View>
          {validator.password ? (
            <Text style={styles.passwordRequirementTitle}>
              La contraseña debe contener entre 8 y 20 caracteres, al menos 1
              caracter especial, 1 número, 1 mayúscula y 1 minúscula.
            </Text>
          ) : null}
          {/* {passwordRequirements.map(requirement => {
            return (
              <View style={styles.passwordRequirementListContainer}>
                <FontAwesomeIcon
                  // icon={faCheckCircle}
                  icon={faCircleDot}
                  size={14}
                  style={styles.noCheck}
                />
                <Text style={styles.passwordRequirementList}>
                  {requirement}
                </Text>
              </View>
            );
          })} */}
        </View>
        <Button
          title={t('SignUp')}
          onPress={onSignUpPress}
          buttonViewStyle={styles.signUpBtn}
          buttonTextStyle={styles.signUpBtnText}
          isLoading={loader}
        />
      </View>

      {/* <Text style={styles.title}>{t('DeliveryAddress')}</Text> */}

      {/* <Divider
        customStyle={{
          marginVertical: 16,
          backgroundColor: Colors.grayLight,
        }}
      /> */}
      <View style={styles.bottomLabel}>
        <Button
          title={t('AreYouAMember')}
          onPress={() => {
            navigation.navigate('SignIn' as never);
          }}
          buttonTextStyle={styles.bottomBtnText}
        />
      </View>
    </SafeAreaView>
  );
};
