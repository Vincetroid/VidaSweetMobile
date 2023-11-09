import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Splash,
  TemplateSplitedViewScrollAndButtonFixedAtTheBottom,
} from '@/components';
import { styles } from './InitialScreen.styles';

export const InitialScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TemplateSplitedViewScrollAndButtonFixedAtTheBottom
        fixedTopViewStyles={styles.topViewStyle}
        fixedBottomViewStyles={styles.bottomViewStyle}>
        <Splash />
        <>
          <Button
            title={t('SignIn')}
            onPress={() => {}}
            buttonViewStyle={styles.signInBtn}
            buttonTextStyle={styles.signInTextBtn}
          />
          <Button
            title={t('SignUp')}
            onPress={() => {}}
            buttonViewStyle={styles.signUpBtn}
            buttonTextStyle={styles.signUpTextBtn}
          />
        </>
      </TemplateSplitedViewScrollAndButtonFixedAtTheBottom>
    </SafeAreaView>
  );
};
