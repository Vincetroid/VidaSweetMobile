import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SliderBox } from 'react-native-image-slider-box';
// import functions from '@react-native-firebase/functions';
import { functions } from '@/firebase/conf';
import { getRandomData, setRandomData } from '@/firebase/queries';
// import { setRandomData } from '@/firebase/queries';
// import { useNavigation } from '@react-navigation/native';
import { gStyles } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import { Button, Menu, RowTitle } from '@/components';
import { ProductCard } from '../../components/ProductCard/ProductCard';
// import { functions } from '../../firebase/conf';

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
];

export const HomeScreen = () => {
  const { t } = useTranslation();

  const product1 = {
    img: require('@/assets/products/ice-cream-liter.jpeg'),
    title: 'Helado 1l',
    price: 150.0,
    isFavorite: false,
  } as ProductItem;
  const product2 = {
    img: require('@/assets/products/ice-cream-single.jpeg'),
    title: 'Helado sencillo',
    price: 60.5,
    isFavorite: true,
  } as ProductItem;

  // const navigation = useNavigation();

  const testFirebaseFunctions = () => {
    // const result = functions().httpsCallable('createRandomData');
    const result = functions().httpsCallableFromUrl(
      // 'http://127.0.0.1:5001/vida-sweet/us-central1/addMessage?text=uppercasemetoo',
      'https://us-central1-vida-sweet.cloudfunctions.net/addMessage?text=uppercasemetoo',
    );

    result()
      .then(response => {
        console.log('response');
        console.log(response.data);
      })
      .catch(e => {
        console.log('error');
        console.log(e);
      });
  };

  const createRandomStuffInDb = () => {
    setRandomData();
  };

  const getRandomStuff = () => {
    getRandomData().then(result => {
      console.log('result');
      console.log(result.length);
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.bg2}>
        <Button
          title={t('Get with Firebase functions')}
          onPress={testFirebaseFunctions}
        />
        <Button title={t('Create')} onPress={createRandomStuffInDb} />
        <Button title={t('Get')} onPress={getRandomStuff} />

        <SliderBox images={images} />

        <RowTitle title={t('Menu')} centered />

        <Menu />

        <RowTitle title={t('TopSellers')} />

        <View style={[gStyles.gralMargin, styles.container]}>
          <ProductCard product={product1} />
          <ProductCard product={product2} />
          <ProductCard product={product1} />
          <ProductCard product={product2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg2: {
    // backgroundColor: themeStyles.white,
    // backgroundColor: 'ghostwhite'
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
