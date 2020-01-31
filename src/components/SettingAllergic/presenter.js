import React,{Component} from "react";
import {Modal, View, Text,StyleSheet,TouchableOpacity,Button} from "react-native";
import * as Enums from "../../Enums";


class SettingAllergic extends Component{
	
	render(){
		const {isSettingAllergic,setShowSetting} = this.props;
		
		return(
			<Modal
				visible = {isSettingAllergic}
			>
				<TouchableOpacity onPress = {() => setShowSetting(Enums.SHOW_SET_CODE)}>
					<Text>식단코드 재설정</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress = {() => setShowSetting(Enums.SHOW_SET_ALLERGIC)}>
					<Text>알레르기 재설정</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress = {() => setShowSetting(Enums.SHOW_WHO_DEV)}>
					<Text>만든 사람</Text>
				</TouchableOpacity>
				<View>
					<Button title = "닫기" onPress = {() => setShowSetting(Enums.SHOW_SET_NONE)} />
					<Button title = "닫기" onPress = {() => setShowSetting(Enums.SHOW_SET_NONE)} />
				</View>
			</Modal>
		)
		
	}
}

export default SettingCode;