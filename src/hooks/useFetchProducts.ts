import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getProducts } from '@/fb/queries';
import { ProductItem } from '@/interfaces';
import handleErrors from '@/utils/handleErrors';

export const useFetchProducts = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoader(true);
      try {
        await pullProducts();
        setLoader(false);
      } catch (error) {
        handleErrors(error.code);
      }
    });

    return unsubscribe;
  }, []);

  const pullProducts = async () => {
    try {
      const productsList = await getProducts();
      setProducts(productsList);
    } catch (error) {
      handleErrors(error.code);
    }
  };

  return {
    products,
    setProducts,
    loader,
    setLoader,
    pullProducts,
  };
};
