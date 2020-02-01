import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import DatePicker from "../DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";
import SettingMain from "../SettingMain";
import MealPicker from "../MealPicker";
import SettingIcon from "../SettingIcon";
import SettingAllergic from "../SettingAllergic";

class Main extends Component{
	
	render(){
		const {code,food,isLoading,year,month,day,meal} = this.props;
		/*
		if(isLoading) return <Loader/>;
		if(!code) return <Setting/>*/
		
		return(
			<View style = {styles.container}>
				<Header
					placement="left"
					statusBarProps={{ barStyle: 'light-content' }}
					centerComponent = {{text : "군대 식단" , style : {color :"#fff", fontSize : 20}}}
					rightComponent = {<SettingIcon/>}
				/>
				<View style = {styles.container}>
					<View style = {styles.pickerContainer}>
						<DatePicker />
						<MealPicker />
					</View>
					<SettingMain />
					<SettingAllergic />
				</View>
			</View>
		);
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		
	},
	pickerContainer:{
		flex:1,
		flexDirection:"row"
	}
})

export default Main;