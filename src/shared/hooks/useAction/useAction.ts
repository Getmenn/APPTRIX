import { bindActionCreators } from '@reduxjs/toolkit';

import { useAppDispatch } from '../useAppDispatch';

export function useActions<T>(actions: T): T {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions as any, dispatch);
}
