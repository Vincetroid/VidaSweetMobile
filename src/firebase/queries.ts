import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { AddressItem, OrderItem, UserItem } from '@/interfaces';
import handleErrors from '@/utils/handleErrors';
import { db } from './conf';

const setUser = async (names: string, surnames: string) => {
  const auth = getAuth();
  const userUID = auth.currentUser?.uid;

  const user = {
    names,
    surnames,
  };

  try {
    const docRef = await addDoc(collection(db, 'users'), {
      ...user,
      userUID,
    });

    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const setAddress = async (address: AddressItem) => {
  const auth = getAuth();
  const userUID = auth.currentUser?.uid;

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
  const addressesCollection = collection(db, 'addresses');
  const addressesDocsSnapshot = await getDocs(addressesCollection);
  const addresses = addressesDocsSnapshot.docs.map(doc => {
    const data = doc.data();
    const docId = doc.id;
    return { docId, ...data };
  });
  return addresses as Array<AddressItem>;
};

// const setOrder = async (order: OrderItem) => {
const setOrder = async (addressId: string) => {
  // const setOrder = async () => {
  console.log('setOrder: ', addressId);
  const auth = getAuth();
  const userUID = auth.currentUser?.uid;

  const order = {
    deliverySchedule: new Date(),
  };

  try {
    const docRef = await addDoc(collection(db, 'orders'), {
      ...order,
      userUID,
      addressId,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export { editAddress, getAddresses, setAddress, setOrder, setUser };
