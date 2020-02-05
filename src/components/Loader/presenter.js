import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar} from "react-native";
import axios from "axios";
import {DAY} from "../../Enums";

class Loader extends Component{
	
	getData = () => {
		
		let mealdate = new Date();
		const {setFixDate,setDate,setMeal,allCode,addData,loadEnd,food} = this.props;
			
		const hour = mealdate.getHours();
		let meal = "brst";
		if(9 <= hour <= 12) meal = "lunc";
		else if(13 <= hour <= 18) meal = "dinr";
		else if (hour >= 19){
			mealdate = new Date(mealdate.getTime() + DAY);
		}
		
		setDate(mealdate.getFullYear(),mealdate.getMonth()+1,mealdate.getDate(),false);
		setFixDate(mealdate.getFullYear(),mealdate.getMonth()+1,mealdate.getDate());		
		
		//데이터파싱필요
		/*
			{
				code,
				foodData:[
					{
						date:"20201212"
						brst:[array of String]
						lunc:[array of String]
						dinr:[array of String]
					}
				]
			}
		*/
		allCode.map(async (code) => {
			const SERVICE = "DS_TB_MNDT_DATEBYMLSVC" + (code === "3333" ? "" : "_" + code);
			const KEY = "3836313632323338303130303632303637";
			const {data } = await axios.get(`http://openapi.mnd.go.kr/${KEY}/json/${SERVICE}/1/500`);
			let curDate = "";
			let tempbrst = [];
			let templunc = [];
			let tempdinr = [];
			let codeFoodTable = [];
			data[`${SERVICE}`].row.map(elem => {
				if(elem["dates"] !== ""){
					if(curDate !== ""){
						codeFoodTable = codeFoodTable.concat({
							date:curDate,
							brst:tempbrst,
							lunc:templunc,
							dinr:tempdinr
						})
					}
					
					curDate = elem["dates"];
					tempbrst = tempdinr = templunc = [];
				} 
				
				if(curDate === "") return null;			
				
				if(elem["brst"] !== "") tempbrst = tempbrst.concat(elem["brst"]);
				if(elem["lunc"] !== "") templunc = templunc.concat(elem["lunc"]);
				if(elem["dinr"] !== "") tempdinr = tempdinr.concat(elem["dinr"]);
			})
			
			addData({
				code,
				foodData:codeFoodTable
			});
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