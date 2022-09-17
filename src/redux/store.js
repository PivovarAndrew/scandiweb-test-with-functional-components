import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/CartSlice'
import CategoryReducer from './slices/CategorySlice'
import CurrencyReducer from './slices/CurrencySlice'

const store = configureStore({
  reducer: {
    cart: CartReducer,
    category: CategoryReducer,
    currency: CurrencyReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export default store;
