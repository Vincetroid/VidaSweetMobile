import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { WhatsAppIcon } from '@/assets/icons';
import { styles } from './ChatWrapper.styles';

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
