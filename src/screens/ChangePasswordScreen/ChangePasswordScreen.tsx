import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './ChangePasswordScreen.styles';

export const ChangePasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState('12345678');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : themeStyles.text };

  const onPressChangePassword = async () => {
    setLoader(true);

    try {
      // TODO:
      // await auth().confirmPaswordReset(
      // auth().currentUser?.email || '',
      //   code,s
      //   newPassword,
      // );

      setLoader(false);
      setNewPassword('');
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <TextInput
        value={email}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setEmail}
        placeholder={t('Email')}
        placeholderTextColor="grey"
        autoCapitalize="none"
      /> */}
      <TextInput
        secureTextEntry
        value={newPassword}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setNewPassword}
        placeholder={t('NewPassword')}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      <Button
        title={t('ChangePassword')}
        onPress={onPressChangePassword}
        buttonViewStyle={styles.signInBtn}
        buttonTextStyle={styles.signInBtnText}
        isLoading={loader}
      />
    </SafeAreaView>
  );
};
