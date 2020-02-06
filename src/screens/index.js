import React from 'react';
import {Text} from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Main from "./Main";
import SettingAllergic from "./SettingAllergic";
import SettingCodeByTable from "./SettingCodeByTable";
import SettingCodeByCode from "./SettingCodeByCode";

const InitStack = createSwitchNavigator(
	{
		Init:{
			screen:Init,
			navigationOption:{
				header:null,
			}
		},
		SettingAllergic:{
			screen:Init,
			navigationOption:{
				header:null,
			}
		},
		SettingCodeByTable:{
			screen:Init,
			navigationOption:{
				header:null,
			}
		}
	}
)

const MainDrawer = createDrawerNavigator(
	{
		"알레르기 설정":{screen:SettingAllergic},
		"식단표로 식단 설정":{screen:SettingCodeByTable},
		"식단코드로 식단 설정":{screen:SettingCodeByCode},
		"식단 보기 설정":{screen:Sh}
	}
)

const AppStack = createStackNavigator(
	{
		Main:{
			screen:Main,
			navigationOption:{
				header:null,
				
			}
		},
		SettingAllergic:{
			screen:SettingAllergic,
			navigationOption:{
				header:null,
			}
		},
		SettingCodeByTable:{
			screen:SettingCodeByTable,
			navigationOption:{
				header:null,
			}
		}
	},
	{
		initialRouteName:"Main",
		headerMode:"none"
	}
);

export default createAppContainer(AppStack);