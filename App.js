import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";
import { PersistGate } from 'redux-persist/es/integration/react';
import Main from "./src/screens/Main";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SettingAllergic from "./src/screens/SettingAllergic";
import SettingCodeByTable from "./src/screens/SettingCodeByTable";
import SettingCodeByCode from "./src/screens/SettingCodeByCode";
import SettingShowMeal from "./src/screens/SettingShowMeal";

import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';

const { store, persistor } = configureStore();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
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

    return (
	  <Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Drawer.Navigator drawerContent = {
					props => (
						<DrawerContentScrollView {...props}>
						<DrawerItemList {...props} />
						</DrawerContentScrollView>)
				}
						initialRouteName = "Main"
						>
					<Drawer.Screen name="뒤로" component = {Main} />
						
					<Drawer.Screen name="알레르기 설정" component={SettingAllergic} />
					<Drawer.Screen name="식단설정-식단표" component={SettingCodeByTable} />
					<Drawer.Screen name="식단설정-코드" component={SettingCodeByCode} />
					<Drawer.Screen name="식단보기 설정" component={SettingShowMeal} />
				</Drawer.Navigator>
				</NavigationContainer>
			</PersistGate>
	  </Provider>
    );
  }
}