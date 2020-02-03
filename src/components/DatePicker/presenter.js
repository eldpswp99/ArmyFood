import React,{Component} from "react";
import {View, Text,Button,StyleSheet,TouchableOpacity} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';
import {MONTH} from "../../Enums";

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
				<TouchableOpacity onPress = {() => setShowDatePicker(true)} >
					<Text style = {styles.text}>{`${year}년 ${month}월 ${day}일`}</Text>
				</TouchableOpacity>
				<DateTimePickerModal
					isVisible = {isDatePicker}
					mode = "date"
					onConfirm = {date => setDate(date.getFullYear(),date.getMonth()+1,date.getDate(),false)}
					onCancel = {() => setShowDatePicker(false)} 
					maximumDate={curDate.getTime() + MONTH}
					minimumDate={curDate.getTime() - MONTH}
					/>
			</View>
		)
		
	}
}

const styles = StyleSheet.create({
	container :{
		flex:2,
		marginTop:10,
		marginLeft:15,
		alignItems:"center"
	},
	text : {
		color:"black",
		fontSize:25,
		borderWidth:2,
		padding:5,
		borderRadius:10
	},
	datePicker:{
		flex:2,
		
	},
})

export default Loader;