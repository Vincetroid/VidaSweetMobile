import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { useTranslation } from 'react-i18next';
import { FontSizes, themeStyles } from '@/global-styles';
import { MenuElementItem } from '@/interfaces';

export const MenuElement = ({ element }: { element: MenuElementItem }) => {
  // const { t } = useTranslation();
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
    fontSize: FontSizes.x_big,
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
