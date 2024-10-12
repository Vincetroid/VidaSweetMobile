import auth from '@react-native-firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {
  AddressItem,
  OrderItem,
  ProductCart,
  ProductItem,
  UserItem,
} from '@/interfaces';
import handleErrors from '@/utils/handleErrors';
import { db } from './conf';

const getUser = async () => {
  const userUID = auth().currentUser?.uid;

  const usersCollection = collection(db, 'users');
  const filtered = query(usersCollection, where('uid', '==', userUID));
  const usersDocsSnapshot = await getDocs(filtered);
  const user = usersDocsSnapshot.docs.map(document => {
    const data = document.data();
    const docId = document.id;
    return { docId, ...data };
  });

  return user as Array<UserItem>;
};

const setUser = async (
  names: string,
  surnames: string,
  uid: string | undefined,
) => {
  const user = {
    names,
    surnames,
  };

  try {
    const docRef = await addDoc(collection(db, 'users'), {
      ...user,
      uid,
      createTimestamp: firestore.FieldValue.serverTimestamp(),
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error registering a new user: ', e);
  }
};

const setAddress = async (address: AddressItem) => {
  // const auth = getAuth();
  const userUID = auth().currentUser?.uid;

  try {
    const docRef = await addDoc(collection(db, 'addresses'), {
      ...address,
      userUID,
    });

    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const editAddress = async (address: AddressItem, addressId: string) => {
  const addressRef = doc(db, 'addresses', addressId);

  try {
    await updateDoc(addressRef, address);
  } catch (error) {
    console.log('Error');
    handleErrors(error.code);
  }
};

const getAddresses = async () => {
  console.log('getAddresses');
  const userUID = auth().currentUser?.uid;

  const addressesCollection = collection(db, 'addresses');
  const filtered = query(addressesCollection, where('userUID', '==', userUID));
  const addressesDocsSnapshot = await getDocs(filtered);
  const addresses = addressesDocsSnapshot.docs.map(document => {
    const data = document.data();
    const docId = document.id;
    return { docId, ...data };
  });

  return addresses as Array<AddressItem>;
};

// const setOrder = async (order: OrderItem) => {
const setOrder = async (addressId: string, cartProducts: ProductCart[]) => {
  // const setOrder = async () => {
  // console.log('setOrder: ', addressId);
  // const auth = getAuth();
  const userUID = auth().currentUser?.uid;

  const order = {
    deliverySchedule: firestore.FieldValue.serverTimestamp(),
  };

  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...order,
      userUID,
      addressId,
      // createTimestamp: new Date().toString(), // new Date(),
      createTimestamp: firestore.FieldValue.serverTimestamp(),
    });
    // console.log('Document setOrder written with ID: ', docRef.id);

    const orderId = docRef.id;

    return orderId;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const setProductOrder = async (
  cartProduct: ProductCart,
  orderId: string | undefined,
  productId: string | undefined,
) => {
  const { quantity, subtotal } = cartProduct;

  const product_order = {
    productId,
    orderId,
    quantity,
    subtotal,
    createTimestamp: firestore.FieldValue.serverTimestamp(),
    // Necesito update timestamp desde el principio?
  };

  try {
    const docRef = await addDoc(collection(db, 'product_orders'), {
      ...product_order,
    });
    console.log('Document ProductOrder written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getProducts = async () => {
  const productsCollection = collection(db, 'products');
  const productsDocsSnapshot = await getDocs(productsCollection);
  const products = productsDocsSnapshot.docs.map(document => {
    const data = document.data();
    const docId = document.id;
    return { docId, ...data };
  });
  return products as Array<ProductItem>;
};

const getSpecificProducts = async (searchTerm: string) => {
  const productsCollection = collection(db, 'products');
  const productsDocsSnapshot = await getDocs(productsCollection);
  const products = productsDocsSnapshot.docs.map(document => {
    const data = document.data();
    const docId = document.id;
    return { docId, ...data };
  });
  return products as Array<ProductItem>;
};

export {
  editAddress,
  getAddresses,
  getProducts,
  getSpecificProducts,
  getUser,
  setAddress,
  setOrder,
  setProductOrder,
  setUser,
};
