import React, { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { themeStyles } from '@/global-styles';
import { Button } from '@/components';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './SignInScreen.styles';
// import handleErrors from '../../utils/handleErrors';

export const SignInScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [email, setEmail] = useState('a@hotmail.com');
  const [password, setPassword] = useState('asdfgh');
  const [loader] = useState(false);

  const textInputColor = { color: loader ? 'grey' : 'black' };

  const onSignInPress = () => {
    // setLoader(true);
    // const auth = getAuth();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then(() => {
    //     setLoader(false);
    //     setEmail('');
    //     setPassword('');
    //     Alert.alert('Successful login');
    //   })
    //   .catch(error => {
    //     const errorCode = error.code;
    //     handleErrors(errorCode);
    //     setLoader(false);
    //   });
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
          placeholder="Email"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />
        <TextInput
          secureTextEntry
          value={password}
          editable={!loader}
          style={[styles.textInput, textInputColor]}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="grey"
          autoCapitalize="none"
        />

        <TouchableOpacity onPress={onSignInPress} style={styles.signInBtn}>
          {!loader ? (
            <Text style={styles.signInBtnText}>{t('SignIn')}</Text>
          ) : (
            <ActivityIndicator color="grey" />
          )}
        </TouchableOpacity>
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
