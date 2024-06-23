import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getProducts, getSpecificProducts } from '@/fb/queries';
import { ProductItem } from '@/interfaces';
import handleErrors from '@/utils/handleErrors';

export const useFetchProducts = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [productsForSearch, setProductsForSearch] =
    useState<ProductItem[]>(products);

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
      setProductsForSearch(productsList);
    } catch (error) {
      handleErrors(error.code);
    }
  };

  // TODO: Revisar si es necesario, de pronto no porque uso productsForSearch para hacer una copia de todos los productos y de ahi filtrar localmente en esa copia sin necesidad de estar obteniendo productos especificos por la red
  const pullSpecificProducts = async (searchTerm: string) => {
    try {
      const productsList = await getSpecificProducts(searchTerm);
      setProducts(productsList);
    } catch (error) {
      handleErrors(error.code);
    }
  };

  return {
    products,
    setProducts,
    productsForSearch,
    setProductsForSearch,
    loader,
    setLoader,
    pullProducts,
    pullSpecificProducts,
  };
};
