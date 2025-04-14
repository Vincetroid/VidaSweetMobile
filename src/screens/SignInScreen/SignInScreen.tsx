import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { collection, getDocs, query } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { db } from '@/fb/conf';
import { getAddresses } from '@/fb/queries';
import { themeStyles } from '@/global-styles';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
import styles from './SignInScreen.styles';

export const SignInScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('vince_trance@hotmail.com');
  const [password, setPassword] = useState('asDF34.,');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : themeStyles.text };

  const onSignInPress = async () => {
    setLoader(true);

    try {
      await auth().signInWithEmailAndPassword(email, password);

      setLoader(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer} accessible={true}>
      <View style={styles.topLabel} accessible={true}>
        <Text style={styles.topLabelText} accessible={true}>
          {t('SignIn')}
        </Text>
      </View>
      <View accessible={true}>
        <TextInput
          accessible={true}
          value={email}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setEmail}
          placeholder={t('Email')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          accessible={true}
          secureTextEntry
          value={password}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setPassword}
          placeholder={t('Password')}
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <Button
          accessible={true}
          title={t('SignIn')}
          onPress={onSignInPress}
          buttonViewStyle={styles.signInBtn}
          buttonTextStyle={styles.signInBtnText}
          isLoading={loader}
        />
        <Button
          accessible={true}
          title={t('ForgotYourPassword')}
          onPress={() => {
            navigation.navigate('ForgotPassword' as never);
          }}
          buttonTextStyle={styles.forgotYourPassword}
        />
      </View>
      <View style={styles.bottomLabel}>
        <Button
          title={t('YouAreNotAMember')}
          onPress={() => {
            navigation.navigate('SignUp' as never);
          }}
          buttonTextStyle={styles.bottomBtnText}
        />
      </View>
    </SafeAreaView>
  );
};
