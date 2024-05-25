import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getProductImage } from '@/fb/storageQueries';
import handleErrors from '@/utils/handleErrors';

export const useFetchProductImages = (img: number) => {
  const navigation = useNavigation();
  const [currentImage, setCurrentImage] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  //TE QUEDASTE AQUI
  const algo = async (image: number) => {
    const productImage = await getProductImage(image.toString());
    console.log('productImage');
    console.log(productImage);
    setCurrentImage(productImage);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoader(true);
      try {
        console.log('img:');
        console.log(img);
        algo(img);
        setLoader(false);
      } catch (error) {
        handleErrors(error.code);
      }
    });

    return unsubscribe;
  }, [img, navigation]);

  return {
    currentImage,
    loader,
    setLoader,
  };
};
