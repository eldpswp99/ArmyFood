import React,{Component} from "react";
import { Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem,Form,Item,Input} from 'native-base';
import {View,Platform,StyleSheet,StatusBar,Alert} from "react-native";
import * as Enums from "../../Enums";

class SettingCodeByTable extends Component{
	addZero(elem){
		return elem < 10 ? "0"+elem : elem;
	}
	
	stableGoBack(){
		const {navigation} = this.props;
		const {index} = navigation.dangerouslyGetState();
		if(index > 0) navigation.goBack();
	}
	
	nextPos(input){
		const {food,posCode,fixMonth,fixYear,question,nextQuestion} = this.props;
		
		const nextPos = posCode.filter(code => {
			if(!food) return false;
			
			const foodTable = food.find(elem => elem["code"] == code);
			
			if(!foodTable || !foodTable["foodData"]) return false;
			
			const todayFoodTable = foodTable["foodData"].find(elem => {
				return elem["date"] === `${fixYear}${this.addZero(fixMonth)}${this.addZero(question)}`;
			});
			
			if(!todayFoodTable) return false;
			
			
			let isContains = false;
			
			todayFoodTable["lunc"].map(elem => {
				if(elem.includes(input)) isContains  = true;
			})

			return isContains;			
		})
		
		return nextPos;
	}
	
	render(){
		const {
			inputTable,
			posCode,
			allCode,
			food,
			question,
			fixYear,
			fixMonth,
			setInputTable,
			cancelSetTable,
			submitSetTable,
			nextQuestion,
			init
		} = this.props;
		const {navigation} = this.props;
		const {index} = navigation.dangerouslyGetState();
		
		
		return(
			<Container>
				<Header>
					<Left>
						<Button transparent onPress = {() =>	{
							cancelSetTable();
							this.stableGoBack()}}>
							<Icon name = "ios-arrow-back" style = {{fontSize:27}} />
						</Button>
					</Left>
					<Body>
						<Title>식단설정-식단표</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style = {{paddingHorizontal:20,paddingTop:20 ,fontSize:20,lineHeight:30}}>
						주어진 질문에 대한 답을 정확히 적어주세요<Text style = {{paddingLeft : 15,fontSize:12,lineHeight:36}}>  남은 후보:<Text style = {{fontSize:12,lineHeight:36,color:"red"}}>{posCode.length}</Text>개</Text>
					</Text>
					<Text style = {{paddingHorizontal:20 ,fontSize:20,lineHeight:30}}>
						Q{question} : {fixYear}년 {fixMonth}월 {question}일의 <Text style = {{fontSize:23, color:"red"}}>점심</Text> 메뉴 중 하나를 정확히 입력하세요 (밥 제외) 
					</Text>
						<Item bordered style = {{width : "90%"}}>
							<Input placeholder = "메뉴 입력"
								onChangeText={text => setInputTable(text)}
								value = {inputTable}/>
							<Button transparent onPress = {() => setInputTable("")}>
								<Icon type = "MaterialIcons" name='cancel'/>
							</Button>
						</Item>
					<Button style = {{marginTop:10}} block onPress = {() => {
							const nextPosCode = this.nextPos(inputTable);
							
							if(nextPosCode.length === 1){
								Alert.alert("코드 설정 완료!",`해당하는 식단코드는 ${nextPosCode[0]} 입니다`);
								submitSetTable(nextPosCode[0]);
								init ? navigation.navigate("SettingAllergic") : this.stableGoBack();
							}else if(nextPosCode.length > 1 && question <= 4){
								nextQuestion(nextPosCode);
							}else{
								Alert.alert("코드 찾기 실패!","잘못 입력하였거나, 해당하는 식단표가 없습니다");
								cancelSetTable();
								this.stableGoBack();
							}
						}}
							>
							<Text>다음</Text>
						</Button>
				</Content>
			</Container>
		)
	}
}

export default SettingCodeByTable;