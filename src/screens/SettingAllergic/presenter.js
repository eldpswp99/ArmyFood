import React,{Component} from "react";
import { Container,Footer,Icon, Button,Header,FooterTab,List,ListItem, Content,Title, Text ,Left,Right,Body,Card,CardItem} from 'native-base';
import {View} from "react-native";
import { CommonActions } from '@react-navigation/native';


class SettingAllergic extends Component{
	
	stableGoBack(){
		const {navigation} = this.props;
		const {index} = navigation.dangerouslyGetState();
		if(index > 0) navigation.goBack();
	}
	
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
						this.stableGoBack()}}>
							<Icon name = "ios-arrow-back" style = {{fontSize:27}} />
						</Button>
					</Left>
					<Body>
						<Title>알레르기 설정</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style = {{paddingHorizontal:20,paddingTop:15 ,fontSize:20,lineHeight:30,}}>
						체크된 항목에 해당하는 메뉴는 <Text style = {{color:"#ff7a00",fontSize:21,lineHeight:36}}>주황색</Text> 으로 표시됩니다.
					</Text>
				<Card style = {{fontSize : 20, height:310, width:"95%"}}>
					{tableRow.map(elem => 							
						(
							<CardItem key = {"tablerow"+elem} style = {{flexDirection:"row", height: 50}}>
								{allAllergic.slice(elem,elem+3).map(allergic =>
								(
									<CardItem key = {"allergic"+allergic.num} style ={{flex:1, justifyContent:"space-around"}}>
										<Button bordered = {!posAllergic[allergic.num]}
										onPress={() => toggleAllergic(allergic.num)}
											style = {{width:85}} small>
											<Text>{`${allergic.value}`}</Text>
										</Button>
									</CardItem>
								))}
							</CardItem>
						))}
					</Card >
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
				) :this.stableGoBack();
					}}>
						<Text style = {{color:"white",fontSize:15}}>완료</Text>
					</Button>

					</Content>
						
						
			</Container>
		)
		
	}
}
export default SettingAllergic;