import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from 'react-native-image-slider-box';
import { gStyles, themeStyles } from '@/global-styles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { RowTitle } from '@/components';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <View style={gStyles.gralContainer}>
          <Text>Home Screen</Text>
        </View>
        <SliderBox images={images} />

        <RowTitle title="Más vendidos" />

        <View style={[gStyles.gralMargin, styles.container]}>
          <ProductCard />
          <ProductCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg2: {
    backgroundColor: 'aqua',
  },
  container: {
    backgroundColor: themeStyles.secondary,
  },
});
