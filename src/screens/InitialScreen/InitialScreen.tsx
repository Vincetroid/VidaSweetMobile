import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Splash,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './InitialScreen.styles';

export const InitialScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeAreaView} accessible={true}>
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom
        fixedTopViewStyles={styles.topViewStyle}
        fixedBottomViewStyles={styles.bottomViewStyle}>
        <Splash />
        <>
          <Button
            title={t('SignIn')}
            onPress={() => {
              navigation.navigate('SignIn');
            }}
            buttonViewStyle={styles.signInBtn}
            buttonTextStyle={styles.signInTextBtn}
          />
          <Button
            title={t('SignUp')}
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            buttonViewStyle={styles.signUpBtn}
            buttonTextStyle={styles.signUpTextBtn}
          />
        </>
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
