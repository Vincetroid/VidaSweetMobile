import storage from '@react-native-firebase/storage';

const getProductImage = async (imgName: string) => {
  const reference = await storage().ref(imgName).getDownloadURL();
  console.log('reference: ', reference);
  return reference;
};

export { getProductImage };
