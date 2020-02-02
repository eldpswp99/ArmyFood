import React,{Component} from "react";
import {View, Text,StyleSheet,StatusBar,TouchableOpacity} from "react-native";
import DatePicker from "../../components/DatePicker"
import { Header } from 'react-native-elements';
import Loader from "../../components/Loader";
import MealPicker from "../../components/MealPicker";
import SettingIcon from "../../components/SettingIcon";
import Modal from "react-native-modal";



class Main extends Component{
	
	render(){
		const {isSettingMain,setShowSetting,code,food,isLoading,year,month,day,meal} = this.props;
		
		/*
		if(isLoading) return <Loader/>;
		if(!code) return <Setting/>*/
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
					<Modal
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
				</Modal>			
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
	}
})

export default Main;