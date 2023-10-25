import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ActivityIndicator,
  Alert,
} from 'react-native';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import styles from './SignInScreen.styles';
import { gStyles, themeStyles } from '@/global-styles';
// import handleErrors from '../../utils/handleErrors';

export const SignInScreen = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [email, setEmail] = useState('a@hotmail.com');
  const [password, setPassword] = useState('asdfgh');
  const [loader, setLoader] = useState(false);

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
    <SafeAreaView style={{ backgroundColor: themeStyles.background }}>
      <TextInput
        value={email}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="grey"
      />
      <TextInput
        secureTextEntry
        value={password}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="grey"
      />
      <Pressable onPress={onSignInPress} style={styles.signInBtn}>
        {!loader ? (
          <Text style={styles.signInBtnText}>SIGN IN</Text>
        ) : (
          <ActivityIndicator color="grey" />
        )}
      </Pressable>
    </SafeAreaView>
  );
};
