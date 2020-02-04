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
			<View style = {styles.container}>
				<TouchableOpacity onPress = {() => nextMeal(meal)}>
					<Text style = {styles.text}>
						{`${mealVal}`}
					</Text>
				</TouchableOpacity>
			</View>
		);
		
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1,
		marginTop:10,
		marginLeft:15,
		alignItems:"flex-start"
	},
	text : {
		color:"black",
		fontSize:25,
		borderWidth:2,
		padding:5,
		borderRadius:10,
	},
	datePicker:{
		flex:2,
		
	},
})

export default MealPicker;