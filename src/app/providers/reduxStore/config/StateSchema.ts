import { createReduxStore } from '@/app/providers/reduxStore/config/createReduxStore';
import { CheckSchema } from '@/entities/check';
import { ProductsSchema } from '@/entities/products';

interface RootState {
    productsReducer: ProductsSchema;
    checkReducer: CheckSchema;
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
