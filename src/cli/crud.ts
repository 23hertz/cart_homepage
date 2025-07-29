import { initializeApp } from "firebase/app";
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface IUser {
    country: string;
    state: string;
    name: string;
}

async function handleCreateOperation() {
    const response = await setDoc(doc(db, "users", "10090"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
    });
    console.log(response);
}

async function handleUpdateOperation() {
    const find = await handleGetOperation("1234");
    const data = {
        ...find,
        name: "Shakiru",
        city: "Kano",
        region: "Alimosho",
    };
    const response = await setDoc(doc(db, "users", "1234"), data);
    console.log(response);
}

async function handleGetOperation(id: string) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return null;
    }
    return docSnap.data();
}

async function getAllOperation() {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        console.log("Document is empty");
        return;
    }
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

async function deleteOperation(id: string) {
    const resp = await deleteDoc(doc(db, "users", id));
    console.log(resp);
}

(async () => {
    try {
        await deleteOperation("BLlUlWfuZCc38KVVxBon");
    } catch (e) {
        console.log(e);
    }
})();
