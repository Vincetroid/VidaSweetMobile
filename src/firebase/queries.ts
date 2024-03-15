// import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { AddressItem } from '@/interfaces';
import { db } from './conf';

const setAddress = async (address: AddressItem) => {
  const auth = getAuth();
  const userUID = auth.currentUser?.uid;

  try {
    const docRef = await addDoc(collection(db, 'addresses'), {
      ...address,
      userUID,
    });

    console.log(docRef);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
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

export { getAddresses, setAddress };
