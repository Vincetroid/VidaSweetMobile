import { addDoc, collection, getDocs, Timestamp } from 'firebase/firestore';
import Note from '../types/Note';
import { createRandomNote } from '../utils/Faker';
import { db } from './conf';

const getNotes = async () => {
  const notesCollection = collection(db, 'notes');
  const notesSnapshotOfDocuments = await getDocs(notesCollection);
  const notesList = notesSnapshotOfDocuments.docs.map(doc => {
    const data = doc.data();
    // TODO: Desctructure data to get timestamp values and convert them with https://firebase.google.com/docs/reference/node/firebase.firestore.Timestamp to show an readable Date
    const docId = doc.id;
    return { docId, ...data };
  });
  return notesList as Array<Note>;
};

const setNote = async (title: string, description: string) => {
  // To create random notes
  // const { title, description, create_timestamp } = await createRandomNote();

  // To create notes from form
  await addDoc(collection(db, 'notes'), {
    title,
    description,
    create_timestamp: new Date(),
  });
};

export { getNotes, setNote };
