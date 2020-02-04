import React,{Component} from "react";

import { Container, Header, Content,Title, Text ,Left,Right,Body} from 'native-base';
import {View,Platform,StyleSheet,StatusBar} from "react-native";

import DatePicker from "../../components/DatePicker"
import Loader from "../../components/Loader";
import MealPicker from "../../components/MealPicker";
import SettingIcon from "../../components/SettingIcon";
import Modal from "react-native-modal";

class Main extends Component{
	
	addZero(elem){
		return elem < 10 ? "0"+elem : elem;
	}
	
	render(){
		const {
			code,
			food,
			isLoading,
			year,
			month,
			day,
			meal,
			isSettingMain,
			isAllergic,
			setShowSetting
		} = this.props;
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
		
		return(
				<Container>
					<Header
						iosBarStyle = {"light-content"}
						>
						<Left></Left>
						<Body>
							<Title>군대 식단</Title>	
						</Body>
						<Right>
							<SettingIcon />
						</Right>
					</Header>
					<Content>
						<DatePicker />
						<MealPicker />
							{
								//TodayFoodTable[meal].map(elem => (<Text>{elem.slice(0,elem.indexOf(" "))}</Text>))
							}
					</Content>	
				</Container>
		);
		
	}
}

const styles = StyleSheet.create({
    container: {
				flex: 1,
				...Platform.select({
						android: {
								marginTop: StatusBar.currentHeight
						}
				})

		}
})
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

export default Main;