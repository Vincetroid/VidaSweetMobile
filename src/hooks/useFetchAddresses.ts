import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAddresses } from '@/fb/queries';
import { AddressItem } from '@/interfaces';
import handleErrors from '@/utils/handleErrors';

export const useFetchAddresses = () => {
  const navigation = useNavigation();
  const [addresses, setAddresses] = useState<AddressItem[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoader(true);
      try {
        await pullAddresses();
        setLoader(false);
      } catch (error) {
        handleErrors(error.code);
      }
    });

    return unsubscribe;
  }, []);

  const pullAddresses = async () => {
    try {
      const addressesList = await getAddresses();
      setAddresses(addressesList);
    } catch (error) {
      handleErrors(error.code);
    }
  };

  return {
    addresses,
    setAddresses,
    loader,
    setLoader,
    pullAddresses,
  };
};
