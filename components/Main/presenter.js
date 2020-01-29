import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import DatePicker from "../DatePicker"
import { Header } from 'react-native-elements';

class Main extends Component{
	
	render(){
		
		return(
			<View>
				<Header
					statusBarProps={{ barStyle: 'light-content' }}
  					barStyle="light-content"
					leftComponent = {{icon : "menu",color:"#fff"}}	 
					centerComponent = {<DatePicker/>}
					rightComponent = {{icon : "settings", color:"#fff"}}
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