import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '@/fb/queries';
import { themeStyles } from '@/global-styles';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleUser,
  faFileInvoice,
  faLocationDot,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, Divider } from '@/components';
import { ChangePasswordIcon } from '@/assets/icons';
import { UserItem } from '../../interfaces/index';
import styles from './SettingsScreen.styles';

export const SettingsScreen = () => {
  const ICON_BTN_SIZE = 20;
  const iconCircleUserSize = 40;
  const { t } = useTranslation();
  const initialUsertItemState = {
    names: '',
    surnames: '',
    email: '',
  };
  const [currentUser, setCurrentUser] = useState<UserItem>(
    initialUsertItemState,
  );
  const navigation = useNavigation();

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        Alert.alert(t('SignedOutSuccessfully'));
        // navigation.navigate('InitialScreen');
      })
      .catch(error => {
        Alert.alert(t('ThereWasAnErrorSigningOutTryAgain'));
        console.log('error', error);
      });
  };

  const onPressAddresses = () => {
    navigation.navigate('DeliveryAddress');
  };

  const onPressChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const fetchUser = async () => {
    const user = await getUser();
    setCurrentUser(user[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.profileMainContainer}>
        <View style={styles.leftZone}>
          <FontAwesomeIcon icon={faCircleUser} size={iconCircleUserSize} />
        </View>
        <View style={styles.rightZone}>
          <Text style={styles.profileName}>
            {currentUser.names} {currentUser.surnames}
          </Text>
          <Text style={styles.email}>{auth().currentUser?.email}</Text>
        </View>
      </View>

      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
      <Button onPress={onPressAddresses} buttonViewStyle={styles.signOutBtn}>
        <>
          <FontAwesomeIcon icon={faLocationDot} size={ICON_BTN_SIZE} />
          <Text style={[styles.signOutTextBtn]}>{t('DeliveryAddresses')}</Text>
        </>
      </Button>
      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
      <Button onPress={() => {}} buttonViewStyle={styles.signOutBtn}>
        <>
          <FontAwesomeIcon icon={faFileInvoice} size={ICON_BTN_SIZE} />
          <Text style={[styles.signOutTextBtn]}>{t('Invoicing')}</Text>
        </>
      </Button>
      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
      <Button onPress={() => {}} buttonViewStyle={styles.signOutBtn}>
        <>
          <FontAwesomeIcon icon={faMessage} size={ICON_BTN_SIZE} />
          <Text style={[styles.signOutTextBtn]}>{t('Suggestions')}</Text>
        </>
      </Button>
      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
      <Button
        onPress={onPressChangePassword}
        buttonViewStyle={styles.signOutBtn}>
        <>
          <ChangePasswordIcon
            width={26}
            height={26}
            style={{
              color: '#000000',
              alignSelf: 'center',
              marginRight: -6,
            }}
          />
          <Text style={[styles.signOutTextBtn]}>{t('ChangePassword')}</Text>
        </>
      </Button>
      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
      <Button onPress={onSignOut} buttonViewStyle={styles.signOutBtn}>
        <>
          <FontAwesomeIcon icon={faPowerOff} size={ICON_BTN_SIZE} />
          <Text style={[styles.signOutTextBtn]}>{t('SignOut')}</Text>
        </>
      </Button>
      <Divider customStyle={{ backgroundColor: themeStyles.disabled }} />
    </SafeAreaView>
  );
};
