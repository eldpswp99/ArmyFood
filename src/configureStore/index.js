import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import reducer from "../reducer";
import { createStore, applyMiddleware } from "redux";
import multi from "redux-multi";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["code", "isAllergic", "init"],
};

const enhancedReducer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(enhancedReducer, applyMiddleware(multi));

  const persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
