import { createReduxStore } from '@/app/providers/reduxStore/config/createReduxStore';
import { TestSchema } from '@/entities/auth/model/types/slice';
import { UserSchema } from '@/entities/user/model/types/slice';

interface RootState {
    testReducer: TestSchema;
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
