import { useEffect, useState } from 'react';
import { getProductImage } from '@/fb/storageQueries';
import handleErrors from '@/utils/handleErrors';

export const useFetchProductImages = (img: number) => {
  const [currentImage, setCurrentImage] = useState<string>('');
  const [loader, setLoader] = useState<boolean>(false);

  const init = async (image: number) => {
    const productImage = await getProductImage(image.toString());
    setCurrentImage(productImage);
  };

  useEffect(() => {
    setLoader(true);
    try {
      init(img);
      setLoader(false);
    } catch (error) {
      handleErrors(error.code);
    }
  }, []);

  return {
    currentImage,
    loader,
    setLoader,
  };
};
