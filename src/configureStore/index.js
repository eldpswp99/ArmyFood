import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';  
import reducer from "../reducer";
import { createStore } from 'redux'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist : ['code',"isAllergic"]
};

const enhancedReducer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(enhancedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;