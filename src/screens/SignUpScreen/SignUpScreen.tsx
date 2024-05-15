import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
// import handleErrors from '../../utils/handleErrors';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '@/fb/queries';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './SignUpScreen.styles';
import { UserValidator } from './SignUpScreen.validator';

export const SignUpScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [names, setNames] = useState('');
  const [surnames, setSurnames] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignUpPress = () => {
    setLoader(true);
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then(async () => {
    //     await createUserWithRestOfData();

    //     await resetForm();

    //     Alert.alert(t('RegistrationCompleted'));
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     handleErrors(errorCode);
    //     setLoader(false);
    //   });
    // console.log('auth().currentUser?.uid');
    // console.log(auth().currentUser?.uid);
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

  const requestValidator = new UserValidator();
  // const validator = requestValidator.validate({
  //   userName: 'Vince',
  //   email: 'unaContraseña',
  //   password: 'unPassword',
  // });

  const validator = requestValidator.validate({
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
          isLoading={loader}
        />
      </View>
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
