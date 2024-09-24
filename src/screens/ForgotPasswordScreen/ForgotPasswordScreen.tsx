import React, { useState } from 'react';
import { SafeAreaView, TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Colors, themeStyles } from '@/global-styles';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './ForgotPasswordScreen.styles';

export const ForgotPasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [loader, setLoader] = useState(false);

  // TODO: Pass to utils b/c is used in SignIn, SignUp and here
  const textInputColor = { color: loader ? 'grey' : themeStyles.text };

  const onPressChangePassword = async () => {
    setLoader(true);

    try {
      await auth().sendPasswordResetEmail(email || '');

      // const theBody = {
      //   email: userEmail,
      // };
      // body: JSON.stringify(theBody),

      // TODO: Check if sendPasswordResetEmail firebase methods works super well, remove this and sendgrid
      // const response = await fetch(`${API_URL}/send-email`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      setLoader(false);
      setEmail('');

      Toast.showWithGravityAndOffset(
        t('ResetPasswordEmailMsg'),
        Toast.LONG,
        Toast.BOTTOM,
        0,
        -150,
        {
          backgroundColor: Colors.grayLightBg,
          textColor: Colors.boldPink,
        },
      );
      navigation.navigate('SignIn');
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
