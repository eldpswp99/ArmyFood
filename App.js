import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Main from "./components/Main";
import configureStore from "./configureStore";
import { PersistGate } from 'redux-persist/es/integration/react';

const { store, persistor } = configureStore();

export default function App() {
  return (
	  <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
		  <Main />
		</PersistGate>
	  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
