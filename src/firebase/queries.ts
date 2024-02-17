import { addDoc, collection, getDocs } from 'firebase/firestore';
import { createRandomDataWithFaker } from '@/utils/Faker';
import { db } from './conf';

const getRandomData = async () => {
  const notesCollection = collection(db, 'randomTestData');
  const notesSnapshotOfDocuments = await getDocs(notesCollection);
  const notesList = notesSnapshotOfDocuments.docs.map(doc => {
    const data = doc.data();
    // TODO: Desctructure data to get timestamp values and convert them with https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp to show an readable Date
    const docId = doc.id;
    return { docId, ...data };
  });
  console.log('notesList');
  console.log(notesList);
  return notesList as Array<any>;
};

const setRandomData = async () => {
  const { color, description, create_timestamp, parangaricutirimicuaro } =
    createRandomDataWithFaker();

  // try {
  addDoc(collection(db, 'randomTestData'), {
    color,
    description: description,
    create_timestamp: create_timestamp,
    parangaricutirimicuaro,
  })
    .then(res => {
      console.log('res');
      console.log(res);
    })
    .catch(error => {
      console.log('error');
      console.log(error);
    });
  // console.log('result');
  // console.log(result);
  // } catch (error) {
  //   console.log('error');
  //   console.log(error);
  // }
};

export { getRandomData, setRandomData };
