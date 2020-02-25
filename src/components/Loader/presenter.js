import React,{Component} from "react";
import { Container,Icon, Button,Text } from 'native-base';
import { Image ,View} from 'react-native';
import axios from "axios";
import {DAY} from "../../Enums";
import {KEY} from "react-native-dotenv";

class Loader extends Component{
	
	getData = () => {
		let mealDate = new Date();
		const {load,allCode,addData,loadEnd,food} = this.props;
		const hour = mealDate.getHours();
		let meal = "brst";
		if(9 <= hour&& hour <= 12) meal = "lunc";
		else if(13 <= hour && hour<= 18) meal = "dinr";
		else if (hour >= 19){
			mealDate = new Date(mealDate.getTime() + DAY);
		}
		
		load(mealDate.getFullYear(),mealDate.getMonth()+1,mealDate.getDate(),meal);
		
		//데이터파싱필요
		/*
			{
				code,
				foodData:[
					{
						date:"20201212"
						lunc:[array of String]
						dinr:[array of String]
					}
				]
			}
		*/
			allCode.map(async (code) => {	
			const SERVICE = "DS_TB_MNDT_DATEBYMLSVC" + (code === "3333" ? "" : "_" + code);
			
			try{
				const {data} = await axios.get(`http://openapi.mnd.go.kr/${KEY}/json/${SERVICE}/1/2000`);
						
			if(!data[`${SERVICE}`] || !data[`${SERVICE}`].row) return null;
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
				
			}catch(error){
				console.error(error);		
			}
			
			
			
		})
	
		loadEnd();
	}
	
	componentDidMount(){
		this.getData();
	}
	
	render(){
		return(
			<View style={{ alignItems: 'center',justifyContent : "center",height:"100%",backgroundColor:"white"}}>
				<Image source={require('../../../assets/images/K02.png')} style={{width:100,height:100}}/>
				<Text style = {{fontFamily : "BMHANNA_11yrs", fontSize :25, marginTop:10}}>오늘의 짬</Text>
			</View>
		)		
	}
}

export default Loader;