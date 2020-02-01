import React,{Component} from "react";
import {Modal, View, Text,StyleSheet,TouchableOpacity,Button} from "react-native";
import * as Enums from "../../Enums";
import { CheckBox } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { EvilIcons } from '@expo/vector-icons';

class SettingAllergic extends Component{

	
	render(){		
		const {isSettingAllergic,
					 submitAllergic,
					 allAllergic,
					 toggleAllergic,
					 posAllergic,
					 cancelAllergic
			} = this.props;
		
		const tableRow = Array.from(new Array(6),(x,index) => index*3);
		return(
			<Modal
				visible = {isSettingAllergic}
				onRequestClose={() => cancelAllergic()}
				transparent = {true}
			>
				<Header
						statusBarProps={{ barStyle: 'light-content' }}
						leftComponent = {
						<TouchableOpacity onPress = {() => cancelAllergic()}>
							<EvilIcons name="close" size={32} color="#fff" />
							</TouchableOpacity>
					}
						centerComponent = {{text : "알레르기 설정" , style : {color :"#fff", fontSize : 20}}}
					/>
				<View style = {styles.container}>
					<View style = {styles.tableContainer}>
						{tableRow.map(elem => 							
							(
								<View key = {"tablerow"+elem} style = {styles.rowContainer}>
									{allAllergic.slice(elem,elem+3).map(allergic =>
									(
										<View style = {styles.elem} key = {"allergic"+allergic.num}>
											<CheckBox
											title={allergic.value}											
											checked={posAllergic[allergic.num]}
											onPress={() => toggleAllergic(allergic.num)}
											size ={14}
											checkedColor = {"#83dcb7"}
											/>
										</View>
									))}
								</View>
							))}
					</View>				

						<View style = {styles.buttonContainer}>
							
							<TouchableOpacity onPress = {() => submitAllergic()}>
								<Text>완료</Text>
							</TouchableOpacity>

						</View>
				</View>
			</Modal>
		)
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		backgroundColor:"#b0b0b0"
	},
	title:{
		flex:1,
		backgroundColor:"red",
		alignItems:"center"
	},
	titleText:{
		
	},
	tableContainer:{
		flex:10,
		paddingTop:5
	},
	rowContainer:{
		
		flexDirection: 'row' 
	},
	elem:{
		width:"33%",
		justifyContent: 'space-around',
		
	},
	buttonContainer:{
		flex:1,
		flexDirection:"row"
	}
})

/*<TouchableOpacity key = {"allergic"+allergic.num} onPress={() => toggleAllergic(allergic.num)} style = {styles.elem}>
										<Text>{allergic.value}</Text>
									</TouchableOpacity>*/
export default SettingAllergic;