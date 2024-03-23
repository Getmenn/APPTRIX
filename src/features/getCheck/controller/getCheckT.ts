import { ActionCreatorWithPayload, Dispatch } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';

import { ICheck } from '@/entities/check/model/types/slice';
import { db } from '@/shared/lib/firebase/db';
import { checkActions } from '@/entities/check';


export const getCheckT = () => async (dispatch: Dispatch, getState: () => any) => {
    try {
        dispatch(checkActions.setLoadingCheckList(true))
        const checkColection = collection(db, 'check');

        const checks = await getDocs(checkColection);
        checks.forEach((el) => {
            dispatch(checkActions.addCheck({ ...el.data(), idCheck: el.id } as ICheck))
        });
    } catch (error) {
        console.log('error getCheckT');
    } finally {
        dispatch(checkActions.setLoadingCheckList(false))
    }
    
}

