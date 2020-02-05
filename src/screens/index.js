import React from 'react';
import {Text} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


import Main from "./Main";
import SettingAllergic from "./SettingAllergic";
import SettingCodeByTable from "./SettingCodeByTable";

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