import React,{Component} from "react";
import { Container,Icon, Button,Header, Content,Title, Text ,Left,Right,Body,Card,CardItem,Form,Item,Input} from 'native-base';
import {View,Platform,StyleSheet,StatusBar,Alert} from "react-native";
import * as Enums from "../../Enums";

class SettingCodeByTable extends Component{
	
	render(){
		const {
			inputTable,
			posCode,
			allCode,
			food,
			question,
			fixYear,
			fixMonth,
			setCode,
			setInputTable,
			setPosCode,
			setQuestion,
			cancelSetTable,
			submitSetTable
		} = this.props;
		const {navigation} = this.props;
		return(
			<Container>
				<Header>
					<Left>
						<Button transparent onPress = {() =>	{
							cancelSetTable();
							navigation.goBack()}}>
							<Icon name = "ios-arrow-back" style = {{fontSize:27}} />
						</Button>
					</Left>
					<Body>
						<Title>식단설정-식단표</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style = {{padding:20 ,fontSize:24,lineHeight:36}}>
						주어진 질문에 대한 답을 정확히 적어주세요<Text style = {{paddingLeft : 15,fontSize:12,lineHeight:36}}>  남은 후보:<Text style = {{fontSize:12,lineHeight:36,color:"red"}}>{posCode.length}</Text>개</Text>
					</Text>
					<Text style = {{padding:20,paddingTop:0 ,fontSize:26,lineHeight:36}}>
						Q{question} : {fixYear}년 {fixMonth}월 {question}일의 메뉴 중 하나를 정확히 입력하세요 (밥 제외) 
					</Text>
						<Item bordered style = {{width : "90%"}}>
							<Input placeholder = "메뉴 입력"
								onChangeText={text => setInputTable(text)}
								value = {inputTable}/>
							<Button transparent onPress = {() => setInputTable("")}>
								<Icon type = "MaterialIcons" name='cancel'/>
							</Button>
						</Item>
					<Button style = {{marginTop:20}} block onPress = {() => {
							if(!allCode.includes(inputTable)){
								Alert.alert("코드를 사용할 수 없습니다!","유효한 코드가 아닙니다")
								setInputCode("");
							}else{
								setCode(inputTable);
								navigation.goBack()	
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