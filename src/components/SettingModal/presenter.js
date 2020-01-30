import React,{Component} from "react";
import {Modal, View, Text,StyleSheet,TouchableOpacity} from "react-native";


class SettingModal extends Component{
	
	render(){
		const {showSetting,navigation} = this.props;
		
		return(
			<Modal
				visible = {showSetting}
			>
				<TouchableOpacity onPress = {navigation.}>
					<Text>식단코드 재설정</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text>알레르기 재설정</Text>
				</TouchableOpacity>
			</Modal>
		)
		
	}
}

export default SettingModal;