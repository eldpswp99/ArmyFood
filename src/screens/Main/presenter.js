import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar,TouchableOpacity} from "react-native";
import DatePicker from "../../components/DatePicker"
import { Header } from 'react-native-elements';
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
		const foodTable = food.find(elem => {
			console.log(elem["code"] == code);
			return elem["code"] == code;
		});
		const TodayFoodTable = foodTable["foodData"].find(elem => {
			return elem["date"] == `${year}${this.addZero(month)}${this.addZero(day)}`
		})
		console.log(TodayFoodTable);
		if(isLoading) return <Loader/>;
/*		if(!code) return <Setting/>*/
		
		return(
			<View style = {styles.container}>
				
				<Header
					placement="left"
					statusBarProps={{ barStyle: 'light-content' }}
					centerComponent = {{text : "군대 식단" , style : {color :"#fff", fontSize : 20}}}
					rightComponent = {<SettingIcon/>}
				/>
	
				<View style = {styles.container}>
					<View style = {styles.pickerContainer}>
						<DatePicker />
						<MealPicker />
					</View>
					<View style ={styles.foodTable}>
						{
							//TodayFoodTable[meal].map(elem => (<Text>{elem.slice(0,elem.indexOf(" "))}</Text>))
						}
					</View>		
				</View>
				
			</View>
		);
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		
	},
	headerText:{
		fontSize:20,
		color:"white",
	},
	pickerContainer:{
		flex:1,
		flexDirection:"row"
	},
	
	mealPicker:{
		flex:1,
		fontSize:15
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