import React,{Component} from "react";

import { Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import {View,Platform,StyleSheet,StatusBar} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Appearance } from 'react-native-appearance';

import {DAY,MONTH} from "../../Enums";
import Loader from "../../components/Loader";

class Main extends Component{	
	addZero(elem){
		return elem < 10 ? "0"+elem : elem;
	}
	
	afterDay(addnum){
		const {year,month,day} = this.props;
		
		const newDay = new Date(new Date(year,month-1,day).getTime() + DAY*addnum);
		
		return newDay;
	}
	
	setDatebyDateInstance(date){
		const {setDate} = this.props;
		
		setDate(date.getFullYear(),date.getMonth()+1,date.getDate(),false);
	}
	
	yesterOrTodayOrTomorrow(){
		const {year,month,day,fixYear,fixDay,fixMonth} = this.props;
		
		const curDate = new Date(year,month-1,day);
		const fixDate = new Date(fixYear,fixMonth-1,fixDay);
		const timeDiff = curDate.getTime() - fixDate.getTime();
		if(timeDiff === DAY) return "(내일)";
		else if(timeDiff === -DAY) return "(어제)";
		if(timeDiff === 0) return "(오늘)";
		
		const dayDiff = parseInt(timeDiff/DAY);
		const sign = dayDiff > 0 ? "+" : "";
		return `(${sign}${dayDiff})`;
	}
	render(){
		let colorScheme = Appearance.getColorScheme();
		let darkMode = colorScheme === 'dark';
				
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
			nextMeal,
			fixYear,
			fixMonth,
			fixDay,
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
		if(isLoading) return <Loader/>;
/*		if(!code) return <Setting/>*/
		
		const tempData = ["밥","배춧국 (5)(6)","애호박나물 (9)","쇠고기감자간장조림 (5)(6)(16)","깍두기","깍두기1"];
		
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
							<Title>오늘의 짬</Title>	
						</Body>
						<Right>
							<Button transparent onPress = {() => setDate(fixYear,fixMonth,fixDay,false)}>
								 <Icon name='md-refresh' style = {{fontSize : 27}}/>
							</Button>
							<Button transparent onPress = {() => setShowDatePicker(true)}>
								 <Icon name='ios-calendar' style = {{fontSize : 27,}}/>
							</Button>
						</Right>
					</Header>	
					<Content contentContainerStyle={{ alignItems: 'center'}}> 
						<View style = {{flexDirection:"row",alignItems:"center",justifyContent:"center", margin:5,marginTop:10}}>
							{(fixDate.getTime()-MONTH < curDate.getTime()) ? (
								<Button transparent onPress = {() => this.setDatebyDateInstance(this.afterDay(-1))}>
									<Icon type = "Entypo" name = "controller-fast-backward" />
								</Button>
							) : null}
							<Text style = {{paddingRight:10, fontSize:20,fontWeight:"bold"}}>
								{this.addZero(month)}.{this.addZero(day)} {this.yesterOrTodayOrTomorrow()} |
							</Text>
							<Button bordered dark onPress = {() => nextMeal(meal)}  style = {{borderRadius:7}}>
								<Text style = {{fontSize:20}}>{mealVal}</Text>
							</Button>
							{fixDate.getTime()+MONTH > curDate.getTime() ? (
								<Button transparent onPress = {() => this.setDatebyDateInstance(this.afterDay(1))}>
									<Icon type = "Entypo" name = "controller-fast-forward" />
								</Button>
							) : null}
						</View>
						<Card style = {{padding:10,width:"95%", borderRadius:10}}>
							{tempData.map(elem => (
								<CardItem key = {elem}>
									<Body>
										<Text style ={{fontSize:23, padding:5}}>{elem}</Text>
									</Body>
								</CardItem>
							))}
						</Card>
						<View style = {{marginTop:5}}>
							<Text>현재 제공받는 식단표의 식단코드는 {`${code}`}입니다.</Text>
						</View >
							<DateTimePickerModal
								isVisible = {isDatePicker}
								mode = "date"
								onConfirm = {date => setDate(date.getFullYear(),date.getMonth()+1,date.getDate(),false)}
								onCancel = {() => setShowDatePicker(false)} 
								maximumDate={fixDate.getTime() + MONTH}
								minimumDate={fixDate.getTime() - MONTH}
								isDarkModeEnabled = {darkMode}
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