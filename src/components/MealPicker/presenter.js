import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar,Button} from "react-native";
import DatePicker from "../DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";
import SettingMain from "../SettingMain";
import SettingIcon from "../SettingIcon";

class MealPicker extends Component{
	
	render(){
		const {meal,nextMeal} = this.props;
		
		let mealVal;
		
		switch(meal){
			case "brst":
				mealVal="아침";
				break;
			case "lunc":
				mealVal="점심";
				break;
			case "dinr":
				mealVal="저녁";
				break;
		}
		
		return(
			<View>
				<Button title = {`${mealVal}`} onPress = {() => nextMeal(meal)}/>
			</View>
		);
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})

export default MealPicker;