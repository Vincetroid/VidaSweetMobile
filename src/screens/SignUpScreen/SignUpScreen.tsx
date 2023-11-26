import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import handleErrors from '../../utils/handleErrors';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './SignUpScreen.styles';
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { UserValidator } from './SignUpScreen.validator';

export const SignUpScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignUpPress = () => {
    setLoader(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoader(false);
        setUserName('');
        setEmail('');
        setPassword('');
        Alert.alert('Registration Completed');
      })
      .catch(error => {
        const errorCode = error.code;
        handleErrors(errorCode);
        setLoader(false);
      });
  };

  const requestValidator = new UserValidator();
  // const validator = requestValidator.validate({
  //   userName: 'Vince',
  //   email: 'unaContraseña',
  //   password: 'unPassword',
  // });

  const validator = requestValidator.validate({
    userName,
    email,
    password,
  });

  console.log('validator');
  console.log(validator);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.topLabel}>
        <Text style={styles.topLabelText}>{t('CreateAnAccount')}</Text>
      </View>
      <View style={styles.signUpContainer}>
        <TextInput
          value={userName}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setUserName}
          placeholder={t('UserName')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
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
          value={password}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setPassword}
          secureTextEntry
          placeholder={t('Password')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <Button
          title={t('SignUp')}
          onPress={onSignUpPress}
          buttonViewStyle={styles.signUpBtn}
          buttonTextStyle={styles.signUpBtnText}
        />
      </View>
      <View style={styles.bottomLabel}>
        {/* <Button>{t('AreYouAMember')}</Button> */}
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
