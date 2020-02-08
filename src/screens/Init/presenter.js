import React,{Component} from "react";
import { H1,Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import * as Enums from "../../Enums";


class Init extends Component{
	
	render(){
		const {navigation} = this.props;
		
		return (
			<Container style = {{alignItems:"center"}}>
				<Text style = {{fontFamily : "BMHANNA_11yrs", fontSize :50 ,marginTop:"60%", fontSize : 30}}>오늘의 짬</Text>
				<Text style = {{marginTop:"2%"}}>군대식단</Text>
				
				<Button style = {{marginTop:200}} block onPress = {() => navigation.navigate("SettingCodeByTable")}>
					<Text>식단표로 식단 설정하기</Text>
				</Button>
				<Button style = {{marginTop:35}} block onPress = {() => navigation.navigate("SettingCodeByCode")}>
					<Text>식단코드로 식단 설정하기</Text>
				</Button>
			</Container>
		);
	}
}

export default Init;