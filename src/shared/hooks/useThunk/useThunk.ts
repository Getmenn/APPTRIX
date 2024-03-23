import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../useAppDispatch";

export function useThunk<T>(actions: T): T {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions as any, dispatch);
}