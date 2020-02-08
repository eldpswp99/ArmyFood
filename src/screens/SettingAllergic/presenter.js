import React,{Component} from "react";
import { Container,Icon, Button,Header,List,ListItem, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import {View,Platform,StyleSheet,StatusBar} from "react-native";
import * as Enums from "../../Enums";
import { CheckBox } from 'react-native-elements';
import { CommonActions } from '@react-navigation/native';



class SettingAllergic extends Component{
	
	render(){				
		const {isSettingAllergic,
					 submitAllergic,
					 allAllergic,
					 toggleAllergic,
					 posAllergic,
					 init,
					 cancelAllergic
			} = this.props;
		
		const tableRow = Array.from(new Array(6),(x,index) => index*3);
		const {navigation} = this.props;
		return(
			<Container>
				<Header>
					<Left>
						<Button transparent onPress = {() => 
					{
						cancelAllergic();
						navigation.goBack()}}>
							<Icon name = "ios-arrow-back" style = {{fontSize:27}} />
						</Button>
					</Left>
					<Body>
						<Title>알레르기 설정</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style = {{padding:20 ,fontSize:24,lineHeight:30}}>
						체크된 항목에 해당하는 메뉴는 <Text style = {{color:"#ff7a00",fontSize:24,lineHeight:36}}>주황색</Text> 으로 표시됩니다.
					</Text>
				<Card style = {{fontSize : 24, height:420, width:"95%"}}>
					{tableRow.map(elem => 							
						(
							<CardItem key = {"tablerow"+elem} style = {{flexDirection:"row", height: 70}}>
								{allAllergic.slice(elem,elem+3).map(allergic =>
								(
									<CardItem key = {"allergic"+allergic.num} style ={{flex:1, justifyContent:"space-around"}}>
										<Button bordered = {!posAllergic[allergic.num]}
										onPress={() => toggleAllergic(allergic.num)}
											style = {{width:90}}>
											<Text>{allergic.value}</Text>
										</Button>
									</CardItem>
								))}
							</CardItem>
						))}
					</Card >
					</Content>
				<View >
						<Button block onPress = {() => {
							submitAllergic();
							init ? navigation.dispatch(
							CommonActions.reset({
								index: 0,
								routes: [
									{
										name: 'MainDrawer',
									}
								],
							})
          ) :navigation.goBack()
						}}
							>
							<Text>완료</Text>
						</Button>
						</View>


					

			</Container>
		)
		
	}
}

/*<TouchableOpacity key = {"allergic"+allergic.num} onPress={() => toggleAllergic(allergic.num)} style = {styles.elem}>
										<Text>{allergic.value}</Text>
									</TouchableOpacity>*/
export default SettingAllergic;