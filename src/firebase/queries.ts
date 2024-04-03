import { getAuth } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { AddressItem, UserItem } from '@/interfaces';
import handleErrors from '@/utils/handleErrors';
import { db } from './conf';

const setUser = async (names: string, surnames: string) => {
  console.log('setUser');
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

export { editAddress, getAddresses, setAddress, setUser };
