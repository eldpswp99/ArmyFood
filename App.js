import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";
import { PersistGate } from 'redux-persist/es/integration/react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Init from "./src/screens/Init";
import Main from "./src/screens/Main";
import MainDrawer from "./src/screens/MainDrawer";
import SettingAllergic from "./src/screens/SettingAllergic";
import SettingCodeByTable from "./src/screens/SettingCodeByTable";
import SettingCodeByCode from "./src/screens/SettingCodeByCode";

import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

const { store, persistor } = configureStore();

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
			BMHANNA_11yrs:require("./assets/fonts/BMHANNA_11yrs_ttf.ttf"),
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

	
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
		
		console.log();
		
    return (
	  <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
						<Stack.Navigator headerMode = "none" initialRouteName = {store.getState().init === true ? "Init" : "MainDrawer"}>
							<Stack.Screen name = "Init" component = {Init}/>
							<Stack.Screen name = "SettingAllergic" component = {SettingAllergic}/>
							<Stack.Screen name = "SettingCodeByTable" component = {SettingCodeByTable}/>
							<Stack.Screen name = "SettingCodeByCode" component = {SettingCodeByCode}/>
							<Stack.Screen name = "MainDrawer" component = {MainDrawer} />
						</Stack.Navigator>										
				</NavigationContainer>
			</PersistGate>
	  </Provider>
    );
  }
}