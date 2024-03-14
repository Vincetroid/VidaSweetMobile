// import { addDoc, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { AddressItem } from '@/interfaces';
import { db } from './conf';

// const getRandomData = async () => {
//   const randomTestDataCollection = collection(db, 'randomTestData');
//   const randomSnapshot = await getDocs(randomTestDataCollection);
//   const notesList = randomSnapshot.docs.map(doc => {
//     const data = doc.data();
//     // TODO: Desctructure data to get timestamp values and convert them with https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp to show an readable Date
//     const docId = doc.id;
//     return { docId, ...data };
//   });
//   console.log('notesList');
//   console.log(notesList);
//   return notesList as Array<any>;
// };

const setRandomData = async () => {
  // console.log('setRandomData: ', db);
  // const { color, description, create_timestamp, parangaricutirimicuaro } =
  //   createRandomDataWithFaker();

  // TE QUEDASTE AQUI, YA FUNCIONA, EL PROBLEMA ERA EL .ENV
  try {
    console.log(collection);
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });
    console.log(docRef);
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

    console.log(docRef);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getAddresses = async () => {
  const addressesCollection = collection(db, 'addresses');
  const addressesDocsSnapshot = await getDocs(addressesCollection);
  const addresses = addressesDocsSnapshot.docs.map(doc => doc.data());
  return addresses;
};

export { getAddresses, setAddress, setRandomData };
