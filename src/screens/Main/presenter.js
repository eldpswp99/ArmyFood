import React,{Component} from "react";

import { Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import {View,Platform,StyleSheet,StatusBar} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import {MONTH} from "../../Enums";
import Loader from "../../components/Loader";
import Modal from "react-native-modal";

import { NavigationContainer,useFocusEffect } from '@react-navigation/native';
import SettingAllergic from "../SettingAllergic";
import SettingCodeByTable from "../SettingCodeByTable";
import SettingCodeByCode from "../SettingCodeByCode";
import SettingShowMeal from "../SettingShowMeal";


class Main extends Component{	
	addZero(elem){
		return elem < 10 ? "0"+elem : elem;
	}
	
	function 
	
	render(){
		const {
			code,
			food,
			isLoading,
			setDate,
			setShowDatePicker,
			isDatePicker,
			year,
			month,
			day,
			meal,
			isSettingMain,
			isAllergic,
			setShowSetting,
			nextMeal,
			fixYear,
			fixMonth,
			fixDay
		} = this.props;
		
		
		let mealVal;
		const curDate = new Date(year,month-1,day);
		const fixDate = new Date(fixYear,fixMonth-1,fixDay);
		
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
		
		//sort후 day차례대로
		
		/*const foodTable = food.find(elem => {
			console.log(elem["code"] == code);
			return elem["code"] == code;
		});*/
		/*const TodayFoodTable = foodTable["foodData"].find(elem => {
			return elem["date"] == `${year}${this.addZero(month)}${this.addZero(day)}`
		})
		console.log(TodayFoodTable);*/
		//if(isLoading) return <Loader/>;
/*		if(!code) return <Setting/>*/
		
		const tempData = ["밥","배춧국 (5)(6)","애호박나물 (9)","쇠고기감자간장조림 (5)(6)(16)","깍두기"];
		
	const {navigation} = this.props;
		return(
				<Container>
					<Header
						iosBarStyle = {"light-content"}
						>
						<Left>
							<Button transparent onPress = {() => navigation.openDrawer()}>
								 <Icon name='md-menu' style = {{fontSize : 27}}/>
							</Button>
						</Left>
						<Body>
							<Title>식단코드 : {`${code}`}</Title>	
						</Body>
						<Right>
							<Button transparent onPress = {() => setShowDatePicker(true)}>
								 <Icon name='ios-calendar' style = {{fontSize : 27}}/>
							</Button>
						</Right>
					</Header>				
					<Content> 
						<Card>
							<CardItem header>
								<Body>
										<Text>{`${year}년 ${month}월 ${day}일 - ${mealVal}`}</Text>									
								</Body>
							</CardItem>
							{tempData.map(elem => (
								<CardItem key = {elem}>
									<Body>
										<Text>{elem}</Text>
									</Body>
								</CardItem>
							))}
						</Card>
						
							<DateTimePickerModal
								isVisible = {isDatePicker}
								mode = "date"
								onConfirm = {date => setDate(date.getFullYear(),date.getMonth()+1,date.getDate(),false)}
								onCancel = {() => setShowDatePicker(false)} 
								maximumDate={fixDate.getTime() + MONTH}
								minimumDate={fixDate.getTime() - MONTH}
							/>
					</Content>	
				
					
				
				</Container>
		);
	}
}

/*<Modal
					isVisible = {isSettingMain}
				>
					<View style = {{flex:1}}>
						<TouchableOpacity onPress = {() => {this.props.navigation.navigate('SettingCodeByTable')}}>
							<Text>식단코드 재설정</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress = {() => {this.props.navigation.navigate("SettingAllergic")}}>
							<Text>알레르기 재설정</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress = {() => {this.props.navigation.navigate("SettingAllergic")}}>
							<Text>만든 사람</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress = {() => setShowSetting(false)}>
							<Text>닫기</Text>
						</TouchableOpacity>
					</View>
				</Modal>	*/

{
								//TodayFoodTable[meal].map(elem => (<Text>{elem.slice(0,elem.indexOf(" "))}</Text>))
							}

export default Main;