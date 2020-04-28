import React, { Component } from 'react';
import {
	Container,
	Icon,
	Button,
	Header,
	Content,
	Title,
	Text,
	Left,
	Right,
	Body,
	Form,
	Item,
	Input
} from 'native-base';
import { View, Platform, StyleSheet, StatusBar, Alert } from 'react-native';

class SettingCodeByCode extends Component {
	stableGoBack() {
		const { navigation } = this.props;
		const { index } = navigation.dangerouslyGetState();
		if (index > 0) navigation.goBack();
	}

	render() {
		const { inputCode, init, allCode, setInputCode, setCode } = this.props;
		const { navigation } = this.props;
		return (
			<Container>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => {
								setInputCode('');
								this.stableGoBack();
							}}
						>
							<Icon name="ios-arrow-back" style={{ fontSize: 27 }} />
						</Button>
					</Left>
					<Body>
						<Title>식단설정-코드</Title>
					</Body>
					<Right />
				</Header>
				<Content contentContainerStyle={{ alignItems: 'center', flex: 1 }}>
					<Text style={{ padding: 20, fontSize: 20, lineHeight: 30 }}>제공받을 식단표의 식단코드를 입력해주세요</Text>
					<Item bordered style={{ width: '90%' }}>
						<Input
							placeholder="코드 입력"
							onChangeText={text => setInputCode(text)}
							value={inputCode}
						/>
						<Button transparent onPress={() => setInputCode('')}>
							<Icon type="MaterialIcons" name="cancel" />
						</Button>
					</Item>
					<Button
						style={{ marginTop: 20 }}
						block
						onPress={() => {
							if (!allCode.includes(inputCode)) {
								Alert.alert('코드를 사용할 수 없습니다!', '유효한 코드가 아닙니다');
								setInputCode('');
							} else {
								setCode(inputCode);
								init ? navigation.navigate('SettingAllergic') : this.stableGoBack();
							}
						}}
					>
						<Text>완료</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default SettingCodeByCode;