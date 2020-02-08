import React,{Component} from "react";
import { H1,Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import * as Enums from "../../Enums";

import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

import SettingAllergic from "../SettingAllergic";
import SettingCodeByTable from "../SettingCodeByTable";
import SettingCodeByCode from "../SettingCodeByCode";
import Main from "../Main";
import SettingShowMeal from "../SettingShowMeal";

class MainDrawer extends Component{
	
	render(){
		
		return (
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
			</Drawer.Navigator>		
		);
	}
}

export default MainDrawer;