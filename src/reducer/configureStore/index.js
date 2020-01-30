import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from "../reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist : ['code']
};

const enhancedReducer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(enhancedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;