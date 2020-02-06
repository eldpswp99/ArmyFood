import React,{Component} from "react";
import {Modal, View, Text,StyleSheet,TouchableOpacity,Button} from "react-native";
import * as Enums from "../../Enums";


class SettingShowMeal extends Component{
	
	render(){
		const {isSettingCode,setShowSetting} = this.props;
		
		return(
			<View styles = {styles.container}>
				<Text>SettingShowMeal</Text>
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		backgroundColor:"#b0b0b0",
		margin:0
	},
})


export default SettingShowMeal;