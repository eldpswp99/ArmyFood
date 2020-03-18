import React, { Component } from 'react';
import {
	Container,
	Footer,
	Icon,
	Button,
	Header,
	FooterTab,
	List,
	ListItem,
	Content,
	Title,
	Text,
	Left,
	Right,
	Body,
	Card,
	CardItem
} from 'native-base';
import { View,Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';

class SettingAllergic extends Component {
	stableGoBack() {
		const { navigation } = this.props;
		const { index } = navigation.dangerouslyGetState();
		if (index > 0) navigation.goBack();
	}
	
	allergicNum () {
		const {posAllergic} = this.props;
		
		let ret = 0;
		posAllergic.map(elem => {
			if(elem) ret++;
		})
		
		return ret;
	}
	
	render() {
		const {
			isSettingAllergic,
			submitAllergic,
			allAllergic,
			toggleAllergic,
			posAllergic,
			init,
			cancelAllergic
		} = this.props;
		
		const tableRow = Array.from(new Array(6), (x, index) => index * 3);
		const { navigation } = this.props;
		return (
			<Container>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								cancelAllergic();
								this.stableGoBack();
							}}
						>
							<Icon name="ios-arrow-back" style={{ fontSize: 27 }} />
						</Button>
					</Left>
					<Body>
						<Title>알레르기 설정</Title>
					</Body>
					<Right />
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style={{ paddingHorizontal: 10, paddingTop: 20, fontSize: 21}}>
						알레르기를 가진 식품을 골라주세요!
					</Text>
					<Text style={{ paddingHorizontal: 10, paddingTop: 15, fontSize: 15, lineHeight: 27 }}>
						체크된 항목에 해당하는 메뉴는 
						<Text style={{ color: '#ff7a00', fontSize: 15 }}> 주황색</Text>으로 표시됩니다.
					</Text>
					<Card style={{ fontSize: 20, width: '95%', marginTop: 20 }}>
						{tableRow.map(elem => (
							<CardItem
								key={'tablerow' + elem}
								style={{ flexDirection: 'row', justifyContent: 'space-around' }}
							>
								{allAllergic.slice(elem, elem + 3).map(allergic => (
									<Button
										bordered={!posAllergic[allergic.num]}
										onPress={() => toggleAllergic(allergic.num)}
										style={{ width: "30%" }}
										small
										key={'allergic' + allergic.num}
									>
										<Text>{`${allergic.value}`}</Text>
									</Button>
								))}
							</CardItem>
						))}
					</Card>
					<Button
						block
						style={{ marginTop: 10 }}
						onPress={() => {
							submitAllergic();
							init
								? navigation.dispatch(
										CommonActions.reset({
											index: 0,
											routes: [
												{
													name: 'MainDrawer'
												}
											]
										})
									)
								: this.stableGoBack();
						}}
					>
						<Text style={{ color: 'white', fontSize: 15 }}>
							{this.allergicNum() > 0 ? '완료' : '알레르기가 없습니다'}
						</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}
export default SettingAllergic;