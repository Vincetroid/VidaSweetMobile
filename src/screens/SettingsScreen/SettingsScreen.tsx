import React from 'react';
import { Alert, SafeAreaView, Text } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from '@/components';
import styles from './SettingsScreen.styles';

export const SettingsScreen = () => {
  const ICON_BTN_SIZE = 20;
  const { t } = useTranslation();

  const onSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        Alert.alert(t('SignedOutSuccessfully'));
        // navigation.navigate('InitialScreen');
      })
      .catch(error => {
        Alert.alert(t('ThereWasAnErrorSigningOutTryAgain'));
        console.log('error', error);
      });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Button onPress={onSignOut} buttonViewStyle={styles.signOutBtn}>
        <>
          <FontAwesomeIcon icon={faPowerOff} size={ICON_BTN_SIZE} />
          <Text style={[styles.signOutTextBtn]}>{t('SignOut')}</Text>
        </>
      </Button>
    </SafeAreaView>
  );
};
