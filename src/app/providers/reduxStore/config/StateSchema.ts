import { createReduxStore } from '@/app/providers/reduxStore/config/createReduxStore';
import { UserSchema } from '@/entities/user/model/types/slice';

interface RootState {
    userReducer: UserSchema;
}
// interface AsyncState {
// }
export type StateSchema = RootState

export type AppDispatch = ReturnType<typeof createReduxStore<StateSchema>>['dispatch'];
export type ThunkAction = (dispatch: AppDispatch, getState: () => StateSchema) => void

// export interface ThunkConfig<T> {
//     rejectValue: T;
//     extra: ThunkExtraArg;
//     state: StateSchema;
// }
