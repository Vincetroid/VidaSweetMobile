import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './ForgotPasswordScreen.styles';

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('vince_trance@hotmail.com');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onPressChangePassword = async () => {
    setLoader(true);

    try {
      const mmm = await auth().sendPasswordResetEmail(email);
      console.log('mmm');
      console.log(mmm);
      setLoader(false);
      setEmail('');
    } catch (error) {
      console.log('ERROR');
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <TextInput
        value={email}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setEmail}
        placeholder={t('Email')}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <Button
        title={t('SendPasswordResetEmail')}
        onPress={onPressChangePassword}
        buttonViewStyle={styles.signInBtn}
        buttonTextStyle={styles.signInBtnText}
        isLoading={loader}
      />
    </SafeAreaView>
  );
};
