import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { gStyles } from '@/global-styles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Menu, MenuElement, RowTitle, ShoppingCartButton } from '@/components';
import { MenuElementItem, ProductItem } from '@/types';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { styles } from './ShoppingCartScreen.styles';

export const ShoppingCartScreen = () => {
  const { t } = useTranslation();

  const navigation = useNavigation();

  const productsLength = false;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {productsLength ? (
        <ScrollView>
          <RowTitle title="Shopping Cart Screen" centered />
        </ScrollView>
      ) : (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* <ScrollView contentContainerStyle={[gStyles.gralContainer]}> */}
          <View style={styles.emptyCardImage}>
            <FontAwesomeIcon icon="shopping-cart" size={160} />
          </View>
          <RowTitle title={t('EmptyCartTitle')} centered />
          <Text style={styles.emptyCartMsg}>{t('EmptyCartMessage')}</Text>
          <Menu />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
