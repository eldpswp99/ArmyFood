import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import axios from "axios";
import {DAY} from "../../Enums";

class Loader extends Component{
	
	getData = () => {
		
		let mealdate = new Date();
		const {setDate,setMeal,allCode,addData,loadEnd} = this.props;
			
		const hour = mealdate.getHours();
		let meal = "brst";
		if(9 <= hour <= 12) meal = "lunc";
		else if(13 <= hour <= 18) meal = "dinr";
		else if (hour >= 19){
			mealdate = new Date(mealdate.getTime() + DAY);
		}
		
		setDate(mealdate.getFullYear(),mealdate.getMonth()+1,mealdate.getDate(),false);
		
		
		//데이터파싱필요
		allCode.map(async (code) => {
			const SERVICE = "DS_TB_MNDT_DATEBYMLSVC" + (code === "3333" ? "" : "_" + code);
			const KEY = "#";
			const { data : {DATA} } = await axios.get(`http://openapi.mnd.go.kr/${KEY}/json/${SERVICE}`);
			addData(code,DATA);
		})
	
		loadEnd();
	}
	
	componentDidMount(){
		this.getData();
	}
	
	render(){
		return(
			<View style = {styles.container}>
			 <Text>isLoading</Text>
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