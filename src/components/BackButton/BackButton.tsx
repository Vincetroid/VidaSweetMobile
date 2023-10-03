import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './BackButton.styles';

export const BackButton = () => {
  // TODO: Hide BackButton while loading sign in/up
  const navigation = useNavigation();
  // const route = useRoute()
  return (
    <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faChevronLeft} size={24} style={styles.icon} />
    </Pressable>
  );
};
