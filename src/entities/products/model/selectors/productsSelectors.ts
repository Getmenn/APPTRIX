export const productsSelector = (state: StateSchema) => state.productsReducer.products;
export const productsLoadingSelector = (state: StateSchema) => state.productsReducer.productsLoading;
export const productsErrorSelector = (state: StateSchema) => state.productsReducer.productsError;
