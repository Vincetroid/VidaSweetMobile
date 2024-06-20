import storage from '@react-native-firebase/storage';

const getProductImage = async (imgName: string) => {
  const reference = await storage().ref(imgName).getDownloadURL();
  return reference;
};

export { getProductImage };
