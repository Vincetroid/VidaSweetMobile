import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from './ChatWrapper.styles';
import { WhatsAppIcon } from '@/assets/icons';

interface ChatWrapperProps {
  children: ReactNode;
}

export const ChatWrapper = ({ children }: ChatWrapperProps) => {
  const ICON_SIZE = 40;

  return (
    <>
      {children}
      <View style={styles.chatViewWrapper}>
        <WhatsAppIcon
          width={ICON_SIZE}
          height={ICON_SIZE}
          style={styles.icon}
        />
      </View>
    </>
  );
};
