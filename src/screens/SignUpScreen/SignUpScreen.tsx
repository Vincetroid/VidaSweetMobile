import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
// import handleErrors from '../../utils/handleErrors';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '@/fb/queries';
import { themeStyles } from '@/global-styles';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, PasswordSecurityIndicator } from '@/components';
import { PasswordTextInput } from '@/components/PasswordTextInput';
import handleErrors from '@/utils/handleErrors';
import styles from './SignUpScreen.styles';
import { UserValidator } from './SignUpScreen.validator';

export const SignUpScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>('');
  const [names, setNames] = useState<string>('');
  const [surnames, setSurnames] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visualizePassword, setVisualizePassword] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);
  const [radioOption, setRadioOption] = useState('');

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

  const onPressRadioOption = (value: string) => {
    console.log('onPressRadioOption');
    setRadioOption(value);
  };

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
        <View style={styles.genderView}>
          <Text style={styles.genderText}>gender</Text>
        </View>
        <View style={styles.radioGroupView}>
          <View style={styles.radioOptionView}>
            <Text style={styles.radioText}>female</Text>
            <TouchableOpacity
              onPress={() => onPressRadioOption('female')}
              style={styles.radioButton}>
              {radioOption === 'female' ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  size={10}
                  color={themeStyles.black}
                />
              ) : null}
            </TouchableOpacity>
          </View>
          <View style={styles.radioOptionView}>
            <Text style={styles.radioText}>male</Text>
            <TouchableOpacity
              onPress={() => onPressRadioOption('male')}
              style={styles.radioButton}>
              {/* <></> */}
              {radioOption === 'male' ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  size={10}
                  color={themeStyles.black}
                />
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
        <PasswordTextInput
          password={password}
          setPassword={setPassword}
          loader={loader}
          visualizePassword={visualizePassword}
          setVisualizePassword={setVisualizePassword}
          showCheckedValidPassword={validator.password}
          placeholder={t('Password')}
        />
        <PasswordSecurityIndicator
          showPasswordRequirement={validator.password}
        />
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
