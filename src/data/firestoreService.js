import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../data/firebase";

export const getAllDocumentsFromCollection = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    return mapToFullDocument(querySnapshot);
}

export const getDocumentFromCollectionById = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    
    const document = {
        id: docSnap.id,
        ...docSnap.data()
    }
    console.log("Document:", document);
    return document
}

export const getDocumentsFromCollectionByCategory = async (collectionName, categoryId) => {
    const q = query(collection(db, collectionName), where("category", "==", categoryId));
    const querySnapshot = await getDocs(q);
    
    const documents = mapToFullDocument(querySnapshot);
    console.log(documents)
    return documents;
}

const mapToFullDocument = (querySnapshot) => {
    const documents = [];

    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const document = {
            id: doc.id,
            ...doc.data()
        }
        documents.push(document);
    });

    return documents;
}