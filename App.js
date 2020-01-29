import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import Main from "./components/Main";

let store = createStore(reducer);

export default function App() {
  return (
  		<Provider store = {store}>
			<Main />
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
