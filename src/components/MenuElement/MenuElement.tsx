import { useState } from 'react';
import { Colors, FontSizes, themeStyles } from '@/global-styles';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { MenuElementItem } from '@/interfaces';
import { useTranslation } from 'react-i18next';

export const MenuElement = ({ element }: { element: MenuElementItem }) => {
  const { t } = useTranslation();
  const { img, title } = element;

  const onPressMenuElement = () => {
    console.log('onPressMenuElement');
  };

  return (
    <TouchableOpacity style={styles.elemWrapper} onPress={onPressMenuElement}>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        <View style={styles.productTitleWrapper}>
          <Text style={styles.productTitle}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  elemWrapper: {
    marginBottom: 20,
    alignSelf: 'center',
  },
  productTitleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productTitle: {
    fontFamily: 'Lato Black',
    fontSize: FontSizes.large,
    color: themeStyles.primary,
    fontWeight: 'bold',
    backgroundColor: '#1d1d1d55',
  },
  img: {
    width: 160,
    height: 'auto',
    aspectRatio: 1,
  },
});
