import React, { ReactNode } from 'react';
import { Alert, Linking, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { servicePhoneNumber } from '@/utils';
import { WhatsAppIcon } from '@/assets/icons';
import { styles } from './ChatWrapper.styles';

interface ChatWrapperProps {
  children: ReactNode;
}

export const ChatWrapper = ({ children }: ChatWrapperProps) => {
  const ICON_SIZE = 40;
  const { t } = useTranslation();

  const onPressWhatsIcon = () => {
    console.log('onPressWhatsIcon');
    const url = `whatsapp://send?phone=${servicePhoneNumber}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          Alert.alert(t('WhatsAppNotFound'));
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => Alert.alert(t('WhatsOpeningError'), err));
  };

  return (
    <>
      {children}
      <View style={styles.chatViewWrapper}>
        <WhatsAppIcon
          width={ICON_SIZE}
          height={ICON_SIZE}
          style={styles.icon}
          onPress={onPressWhatsIcon}
        />
      </View>
    </>
  );
};
