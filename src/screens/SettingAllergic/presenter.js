import React,{Component} from "react";
import {Modal, View, Text,StyleSheet,TouchableOpacity,Button} from "react-native";
import { Header } from 'react-native-elements';
import * as Enums from "../../Enums";
import { CheckBox } from 'react-native-elements';
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
			<View>
				<Header
					statusBarProps={{ barStyle: 'light-content' }}
					leftComponent = {
					<TouchableOpacity onPress = {() => cancelAllergic()}>
						<EvilIcons name="close" size={32} color="#fff" />
						</TouchableOpacity>
				}
					centerComponent = {{text : "알레르기 설정" , style : {color :"#fff", fontSize : 20}}}
				/>
				<View style = {styles.title}>
					<Text style = {styles.titleText}>
						체크된 항목에 해당하는 메뉴는 <Text>주황색</Text>으로 표시됩니다.
					</Text>
				</View>
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
		)
		
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		backgroundColor:"#b0b0b0",
		margin:0
	},
	header:{
		height:55,
		backgroundColor:"yellow"
	},
	headerText:{
		fontSize:20,
		color:"white",
	},
	title:{
		flex:2,
		backgroundColor:"blue",
		alignItems:"center",
		padding:10,
		lineHeight:1.5
	},
	titleText:{
		fontSize:26
		
	},
	tableContainer:{
		flex:4,
		paddingTop:5,
		borderWidth:4
		
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
		backgroundColor:"red",
		flexDirection:"row"
	}
})

/*<TouchableOpacity key = {"allergic"+allergic.num} onPress={() => toggleAllergic(allergic.num)} style = {styles.elem}>
										<Text>{allergic.value}</Text>
									</TouchableOpacity>*/
export default SettingAllergic;