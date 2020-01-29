import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import axios from "axios";

class Loader extends Component{
	
	getData = async () => {
	
		const DAY = 86400000;
		
		let mealdate = new Date();
		const {setDate,setMeal,all,addData,loadEnd} = this.props;
			
		const hour = mealdate.getHours();
		let meal = "brst";
		if(9 <= hour <= 12) meal = "lunc";
		else if(13 <= hour <= 18) meal = "dinr";
		else if (hour >= 19){
			mealdate = new Date(mealdate.getTime() + DAY);
		}
		
		setDate(mealdate.getFullYear(),mealdate.getMonth()+1,mealdate.getDate(),false);
		
		
		//데이터파싱필요
		all.map(elem => {
			const { data : {DATA} } = await axios.get(elem.url);
			addData(elem.code,DATA);
		})
	
		loadEnd();
	}
	
	componentDidMount(){
		this.getData();
	}
	
	render(){
		return(
			<View style = {styles.container}>
			 isLoading
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})

export default Loader;