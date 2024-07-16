import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { SliderBox } from 'react-native-image-slider-box';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import { Colors } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import {
  faCancel,
  faClose,
  faCross,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addProduct } from '@/redux-content';
import { useAppDispatch } from '@/hooks';
import { useFetchProductImages } from '@/hooks/useFetchProductImages';
import { formatCurrency } from '@/utils';
import { AddRemoveToFavorites } from '../AddRemoveToFavorites';
import { styles } from './ProductCard.styles';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/cookies.jpeg?alt=media&token=3b9e5380-6ad7-42a2-b48f-923ed599ed21',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/fresa.jpg?alt=media&token=ff5a9ab4-b7fc-4958-a019-d8ecfb64212d',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/limon.jpeg?alt=media&token=82277e18-ac14-4488-821e-b34f4254b51d',
  'https://firebasestorage.googleapis.com/v0/b/vida-sweet.appspot.com/o/mamey.jpeg?alt=media&token=dbdc8e46-30bd-4871-8c85-c396140c2654',
];

const ImageModal = ({ children, isImageVisible, setIsImageVisible }) => {
  const onCloseImageModal = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <Modal isVisible={isImageVisible}>
      <>
        <TouchableOpacity
          style={styles.cancelImageModalIcon}
          onPress={onCloseImageModal}>
          <FontAwesomeIcon icon={faClose} size={24} style={styles.icon} />
        </TouchableOpacity>
        <Pressable onPress={onCloseImageModal} style={styles.modalPressable}>
          {children}
          {/* <SliderBox images={images} /> */}
        </Pressable>
      </>
    </Modal>
  );
};

export const ProductCard = ({ product }: { product: ProductItem }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const { img, title, price, isFavorite = false } = product;
  // console.log('img');
  // console.log(img);
  const { currentImage } = useFetchProductImages(img);

  const cardGap = 30;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  const onAddProduct = () => {
    dispatch(addProduct(product));

    Toast.showWithGravityAndOffset(
      t('ProductAddedToCart'),
      Toast.LONG,
      Toast.BOTTOM,
      0,
      -150,
      {
        backgroundColor: Colors.grayLightBg,
        textColor: Colors.boldPink,
      },
    );
  };

  return (
    <View
      style={{
        width: cardWidth,
        marginBottom: cardGap,
      }}>
      <AddRemoveToFavorites
        isFavorite={isFavorite}
        size={18}
        wrapperStyle={styles.heartWrapper}
      />
      <TouchableOpacity
        style={styles.imgContainer}
        onPress={() => setIsImageVisible(!isImageVisible)}>
        <Image
          style={styles.img}
          source={{
            uri: currentImage,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
      <TouchableOpacity style={styles.addBtn} onPress={onAddProduct}>
        <FontAwesomeIcon icon="cart-shopping" size={16} style={styles.icon} />
        <Text style={styles.addText}>{t('Add')}</Text>
      </TouchableOpacity>
      <ImageModal
        isImageVisible={isImageVisible}
        setIsImageVisible={setIsImageVisible}>
        <Image
          style={styles.imgModal}
          source={{
            uri: currentImage,
          }}
          resizeMode="contain"
        />
      </ImageModal>
    </View>
  );
};
