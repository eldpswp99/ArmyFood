import React,{Component} from "react";
import {View, Text,StyleSheet,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Enums  from "../../Enums";

class SettingIcon extends Component{
	
	render(){
		const {setShowSetting} = this.props;
		
		return(
			<TouchableOpacity onPress = {() => setShowSetting(true)}>
				<Ionicons name="md-settings" size={27} color="#fff" />
			</TouchableOpacity>
		)
		
	}
}

export default SettingIcon;