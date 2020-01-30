import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import DatePicker from "../../components/DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";
import Setting from "../Setting";
import SettingIcon from "../../components/SettingIcon";

class Main extends Component{
	
	render(){
		
		const {code,food,isLoading,year,month,day,meal} = this.props;
		
		if(isLoading) return <Loader/>;
		if(!code) return <Setting/>
		
		return
		(
			<View>
				<Header
					statusBarProps={{ barStyle: 'light-content' }}
					leftComponent = {<DatePicker/>}
					rightComponent = {<SettingIcon/>}
				/>
				<View style = {styles.container}>
				
				</View>
			</View>
		)
		
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