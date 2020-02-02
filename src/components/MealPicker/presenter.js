import React,{Component} from "react";
import {View, Text,StyleSheet,TouchableOpacity,StatusBar,Button} from "react-native";
import DatePicker from "../DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";

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
				<TouchableOpacity onPress = {() => nextMeal(meal)}>
					<Text>
						{`${mealVal}`}
					</Text>
				</TouchableOpacity>
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