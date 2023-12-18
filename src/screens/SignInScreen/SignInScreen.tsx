import React, { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components';
import handleErrors from '@/utils/handleErrors';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './SignInScreen.styles';
// import handleErrors from '../../utils/handleErrors';

export const SignInScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [email, setEmail] = useState('a@hotmail.com');
  const [password, setPassword] = useState('1234567');
  const [loader, setLoader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignInPress = async () => {
    console.log('PRESIONANDO');
    setLoader(true);
    const auth = getAuth();

    try {
      const signInResponse = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log('signInResponse');
      console.log(signInResponse);
      setLoader(false);
      setEmail('');
      setPassword('');
      Alert.alert('Successful login');
    } catch (error) {
      console.log('error');
      const errorCode = error.code;
      handleErrors(errorCode);
      setLoader(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.topLabel}>
        <Text style={styles.topLabelText}>{t('SignIn')}</Text>
      </View>
      <View>
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
          title={t('SignIn')}
          onPress={onSignInPress}
          buttonViewStyle={styles.signInBtn}
          buttonTextStyle={styles.signInBtnText}
          isLoading={loader}
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
