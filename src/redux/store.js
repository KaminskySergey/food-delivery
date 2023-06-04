import { configureStore } from '@reduxjs/toolkit';
import persistStore from "redux-persist/es/persistStore";
import { initShop } from './shop/initShop';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { shopsReducer } from './shop/shopSlise';
import { initProduct } from './product/initProduct';
import { productsReducer } from './product/productSlise';
import { initCart } from './cart/initCart';
import { cartsReducer } from './cart/cartSlice';
import { authReducer } from './auth/authSlice';
import { initAuth } from './auth/initAuth';


const initState = {
  shop: initShop,
  product: initProduct,
  cart: initCart,
  auth: initAuth,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    shop: shopsReducer,
    product: productsReducer,
    cart: cartsReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);