import React,{Component} from "react";
import {View, Text,StyleSheet,TouchableOpacity} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';

class Loader extends Component{
	constructor(props){
		super(props);
		
		this.pickDate = this.pickDate.bind(this);
	}
	
	pickDate(date){
		const {year,month,day,setDate} = this.props;	
		
	}
	
	render(){				
		const {year,month,day,isDatePicker,setDate,setShowDatePicker} = this.props;
		const curDate = new Date(year,month,day);
		return(
			<View style = {styles.container}>
			<TouchableOpacity style = {styles.container} onPress = {() => setShowDatePicker(true)}>
			 <Text style = {styles.text}>{`${year}년 ${month}월 ${day}일`}</Text>
			</TouchableOpacity>
			<DateTimePickerModal
				isVisible = {isDatePicker}
				mode = "date"
				onConfirm = {date => setDate(date.getFullYear(),date.getMonth()+1,date.getDate(),false)}
				onCancel = {() => setShowDatePicker(false)} />
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	container :{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	},
	text : {
		color:"white",
		fontSize:25
	}
})

export default Loader;