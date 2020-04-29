import React, { Component } from "react";
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
  Input,
} from "native-base";
import { View, Platform, StyleSheet, StatusBar, Alert } from "react-native";
import axios from "axios";
import { API_ADDRESS } from "react-native-dotenv";

class SettingCodeByCode extends Component {
  stableGoBack() {
    const { navigation } = this.props;
    const { index } = navigation.dangerouslyGetState();
    if (index > 0) navigation.goBack();
  }

  async getTable(code, date, type) {
    try {
      let food = (await axios.get(`${API_ADDRESS}/${code}/${date}/${type}`))
        .data;

      food = food ? food[`${type}`] : null;

      const { setTable } = this.props;

      setTable(food);
    } catch (error) {
      console.error(error);
    }
  }

  addZero(elem) {
    return elem < 10 ? "0" + elem : elem;
  }

  dateToString(date) {
    return `${date.getFullYear()}${this.addZero(
      date.getMonth() + 1
    )}${this.addZero(date.getDate())}`;
  }

  render() {
    const {
      inputCode,
      init,
      allCode,
      setInputCode,
      setCode,
      year,
      month,
      meal,
      day,
    } = this.props;
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                setInputCode("");
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
        <Content contentContainerStyle={{ alignItems: "center", flex: 1 }}>
          <Text style={{ padding: 20, fontSize: 20, lineHeight: 30 }}>
            제공받을 식단표의 식단코드를 입력해주세요
          </Text>
          <Item bordered style={{ width: "90%" }}>
            <Input
              placeholder="코드 입력"
              onChangeText={(text) => setInputCode(text)}
              value={inputCode}
            />
            <Button transparent onPress={() => setInputCode("")}>
              <Icon type="MaterialIcons" name="cancel" />
            </Button>
          </Item>
          <Button
            style={{ marginTop: 20 }}
            block
            disabled={inputCode === ""}
            onPress={() => {
              if (!allCode.includes(inputCode)) {
                Alert.alert(
                  "코드를 사용할 수 없습니다!",
                  "유효한 코드가 아닙니다"
                );
                setInputCode("");
              } else {
                this.getTable(
                  inputCode,
                  this.dateToString(new Date(year, month - 1, day)),
                  meal
                );
                setCode(inputCode);
                init
                  ? navigation.navigate("SettingAllergic")
                  : this.stableGoBack();
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
