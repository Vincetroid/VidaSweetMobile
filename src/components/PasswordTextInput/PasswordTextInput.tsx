import React from 'react';
import { TextInput, View } from 'react-native';
import { ValueValidationResult } from 'fluentvalidation-ts/dist/ValueValidationResult';
import { useTranslation } from 'react-i18next';
import { themeStyles } from '@/global-styles';
import {
  faCheckCircle,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button } from '../Button';
import { styles } from './PasswordTextInput.styles';

interface PasswordTextInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  loader: boolean;
  visualizePassword: boolean;
  setVisualizePassword: React.Dispatch<React.SetStateAction<boolean>>;
  showCheckedValidPassword:
    | ValueValidationResult<string | undefined>
    | undefined;
}

const ICON_BTN_SIZE = 16;

export const PasswordTextInput = ({
  password,
  setPassword,
  loader,
  visualizePassword,
  setVisualizePassword,
  showCheckedValidPassword,
}: PasswordTextInputProps) => {
  const textInputColor = { color: loader ? 'grey' : themeStyles.text };
  const { t } = useTranslation();

  const onPressEye = async () => {
    console.log('onPressEye');
    setVisualizePassword(!visualizePassword);
  };

  return (
    <View>
      {!showCheckedValidPassword ? (
        <FontAwesomeIcon
          icon={faCheckCircle}
          size={14}
          style={styles.checkIcon}
        />
      ) : null}
      <TextInput
        value={password}
        editable={!loader}
        style={[styles.textInput, textInputColor]}
        onChangeText={setPassword}
        secureTextEntry={!visualizePassword}
        placeholder={t('Password')}
        placeholderTextColor="grey"
        autoCapitalize="none"
        maxLength={20}
      />
      <Button onPress={onPressEye} buttonViewStyle={styles.btnEyeIcon}>
        <FontAwesomeIcon
          icon={visualizePassword ? faEye : faEyeSlash}
          size={ICON_BTN_SIZE}
          style={styles.eyeIcon}
        />
      </Button>
    </View>
  );
};
