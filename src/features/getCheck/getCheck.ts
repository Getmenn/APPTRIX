import { ICheck } from "@/entities/check/model/types/slice";
import { db } from "@/shared/lib/firebase/db";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

export const getCheck = async (addCheck: ActionCreatorWithPayload<ICheck, "check/addCheck">) => {
    const checkColection = collection(db, 'check');

    const docSnap = await getDocs(checkColection);
    docSnap.forEach((doc) => {
        addCheck(doc.data() as ICheck)
    });
};