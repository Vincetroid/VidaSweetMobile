import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { debounce, isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Colors, themeStyles } from '@/global-styles';
import {
  Button,
  PasswordSecurityIndicator,
  PasswordTextInput,
} from '@/components';
import ErrorCodes from '@/utils/ErrorCodes';
import ErrorMessages from '@/utils/ErrorMessages';
import handleErrors from '@/utils/handleErrors';
import styles from './ChangePasswordScreen.styles';
import { ChangePasswordValidator } from './ChangePasswordScreen.validator';

export const ChangePasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  const onPressChangePassword = async () => {
    if (isEmpty(validator)) {
      setLoader(true);
      try {
        const cU = auth()?.currentUser;
        const emailCred = auth.EmailAuthProvider.credential(
          cU?.email || '',
          currentPassword,
        );
        // {"providerId": "password", "secret": "asDF34)(", "token": "vince_trance@hotmail.com"}
        console.log('emailCred');
        console.log(emailCred);

        if (newPassword === confirmNewPassword) {
          const mmm = await cU?.reauthenticateWithCredential({
            providerId: 'password',
            secret: 'asDF34)-',
            token: 'vince_trance@hotmail.com',
          });
          // {"additionalUserInfo": {"isNewUser": false}, "user": {"displayName": null, "email": "vince_trance@hotmail.com", "emailVerified": true, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": null, "photoURL": null, "providerData": [Array], "providerId": "firebase", "tenantId": null, "uid": "fyk9Gu8riARNGBIbHIdK1HMaUvz2"}}
          console.log('mmm');
          console.log(mmm);
          await cU?.updatePassword(newPassword);
        }

        setLoader(false);
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
        //TODO: Agregar navegación o un toast mejor para decir que se cambió exitosamente
        Toast.showWithGravityAndOffset(
          t('UpdatePasswordSuccess'),
          Toast.LONG,
          Toast.BOTTOM,
          0,
          -150,
          {
            backgroundColor: Colors.grayLightBg,
            textColor: Colors.boldPink,
          },
        );
      } catch (error) {
        const errorCode = error.code;
        console.log('ERROR BaJO: ', errorCode, ErrorCodes.invalidCredential);

        if (
          errorCode === ErrorCodes.invalidCredential ||
          errorCode === ErrorCodes.invalidCredentials
        ) {
          Toast.showWithGravityAndOffset(
            'La contraseña actual es incorrecta',
            Toast.LONG,
            Toast.BOTTOM,
            0,
            -150,
            {
              backgroundColor: Colors.grayLightBg,
              textColor: Colors.boldPink,
            },
          );
        } else {
          console.log('yendo al else');
          handleErrors(errorCode);
        }
        setLoader(false);
      }
    } else {
      console.log('else');
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

  const requestValidator = new ChangePasswordValidator();

  const validator = requestValidator.validate({
    currentPassword,
    newPassword,
    confirmNewPassword,
  });

  console.log(validator);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <PasswordTextInput
        password={currentPassword}
        setPassword={setCurrentPassword}
        loader={loader}
        showCheckedValidPassword={validator.currentPassword}
        placeholder={t('CurrentPassword')}
      />
      {/* <PasswordSecurityIndicator
        showPasswordRequirement={validator.currentPassword}
      /> */}
      <PasswordTextInput
        password={newPassword}
        setPassword={setNewPassword}
        loader={loader}
        showCheckedValidPassword={validator.newPassword}
        placeholder={t('NewPassword')}
      />
      <PasswordSecurityIndicator
        showPasswordRequirement={validator.newPassword}
      />
      <PasswordTextInput
        password={confirmNewPassword}
        setPassword={setConfirmNewPassword}
        loader={loader}
        showCheckedValidPassword={validator.confirmNewPassword}
        placeholder={t('ConfirmNewPassword')}
      />
      <PasswordSecurityIndicator
        showPasswordRequirement={validator.confirmNewPassword}
      />
      {/* TODO: Poner aqui o dentro de PasswordSecurityIndicator el mensaje de las contraseñas que coinciden o no lo hacen */}
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
