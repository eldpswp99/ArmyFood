import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import DatePicker from "../DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";
import SettingMain from "../SettingMain";
import MealPicker from "../MealPicker";
import SettingIcon from "../SettingIcon";

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
					<DatePicker />
					<MealPicker />
					<SettingMain />
				</View>
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

export default Main;