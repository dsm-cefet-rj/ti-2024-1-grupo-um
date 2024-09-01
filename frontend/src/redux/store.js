import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Usa o localStorage como padrão
import rootReducer from "./root-reducer";
import tokenMiddleware from "./middleware/tokenMiddleware.js";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Ignora erros relacionados à serialização
    })
    .concat( logger, thunk),
});

export const persistor = persistStore(store);
export default store;