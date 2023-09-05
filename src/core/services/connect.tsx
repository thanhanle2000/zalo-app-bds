import {
    QueryDocumentSnapshot,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc
} from "firebase/firestore";
import { firestore } from "../controller/controller";

// lấy dữ liệu từ cloud:
// + project lấy data dựa trên dự án
// + status == true mới cho lấy
export const getDataCloud = async (brand: string, project: string, type: number, selectedId: any, idItem: string) => {
    const collectionRef = collection(firestore, brand);
    const querySnapshot = await getDocs(collectionRef);
    let query;

    if (type === 1) {
        query = (doc: QueryDocumentSnapshot) => doc.id.includes(`${project}-`) && doc.data().status === true;
    } else if (type === 2) {
        query = (doc: QueryDocumentSnapshot) => {
            // Ensure selectedIds is an array and contains selectedId
            const selectedIds = doc.data().selectedIds || [];
            return (
                doc.id.includes(`${project}-`) &&
                doc.data().status === true &&
                selectedIds.includes(selectedId)
            );
        };
    } else if (type === 3) {
        query = (doc: QueryDocumentSnapshot) =>
            doc.id === idItem && doc.data().status === true; // Thêm trường hợp type === 3
    }

    const data = querySnapshot.docs
        .filter(query)
        .map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

    return data;
};