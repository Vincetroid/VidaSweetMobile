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
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
import { Colors, themeStyles } from '@/global-styles';
import { ProductItem } from '@/interfaces';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addProduct } from '@/redux-content';
import { useAppDispatch } from '@/hooks';
import { useFetchProductImages } from '@/hooks/useFetchProductImages';
import { useFetchProducts } from '@/hooks/useFetchProducts';
import { formatCurrency, getProductTitleByLanguage } from '@/utils';
import { AddRemoveToFavorites } from '../AddRemoveToFavorites';
import { Loader } from '../Loader';
import { styles } from './ProductCard.styles';

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
  const { pullProducts } = useFetchProducts();
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const { img, title, titleEng, price, isFavorite = false } = product;
  const { currentImage, loader } = useFetchProductImages(img);

  const cardGap = 30;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  const onAddProduct = async () => {
    dispatch(addProduct(product));

    //TODO: Cuando se llegue al punto de necesitar el inventario en entregas continuas con repartidores, esto será necesario
    // const newStock = await updateStock('decrement', product.docId);
    // if (newStock <= 0) {
    //   console.log('pulling');
    //   await pullProducts(product);
    // }

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
        {!loader ? (
          <Image
            style={styles.img}
            source={{
              uri: currentImage,
            }}
            resizeMode="contain"
          />
        ) : (
          <Loader size="small" color={themeStyles.disabled} />
        )}
      </TouchableOpacity>
      <Text style={styles.productTitle}>
        {getProductTitleByLanguage(title, titleEng)}
      </Text>
      <Text style={styles.productPrice}>{formatCurrency(price)}</Text>
      <TouchableOpacity style={styles.addBtn} onPress={onAddProduct}>
        <FontAwesomeIcon icon="cart-shopping" size={16} style={styles.icon} />
        <Text style={styles.addText}>{t('Add')}</Text>
      </TouchableOpacity>
      <ImageModal
        isImageVisible={isImageVisible}
        setIsImageVisible={setIsImageVisible}>
        {!loader ? (
          <Image
            style={styles.imgModal}
            source={{
              uri: currentImage,
            }}
            resizeMode="contain"
          />
        ) : (
          <Loader size="small" color={themeStyles.tertiary} />
        )}
      </ImageModal>
    </View>
  );
};
