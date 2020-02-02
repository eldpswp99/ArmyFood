import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";
import { PersistGate } from 'redux-persist/es/integration/react';
import AppStack from './src/screens';

const { store, persistor } = configureStore();

export default function App() {
	console.log(AppStack);
	
	return (
	  <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<AppStack />
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
