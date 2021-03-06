import React, { Component } from "react";
import axios from "axios";
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
  Card,
  CardItem,
  Form,
  Item,
  Input,
} from "native-base";
import { View, Platform, StyleSheet, StatusBar, Alert } from "react-native";
import { API_ADDRESS } from "react-native-dotenv";
import debounce from "lodash.debounce";

class SettingCodeByTable extends Component {
  addZero(elem) {
    return elem < 10 ? "0" + elem : elem;
  }
  stableGoBack() {
    const { navigation } = this.props;
    const { index } = navigation.dangerouslyGetState();
    if (index > 0) navigation.goBack();
  }

  async nextPos(prevPos, input, date) {
    const { codeInv, allCode } = this.props;
    const posBit = prevPos.reduce((acc, cur) => {
      return acc + (1 << codeInv[`${cur}`]);
    }, 0);
    const { data } = await axios.get(`${API_ADDRESS}/setcode`, {
      params: {
        input,
        date,
        posBit,
      },
    });

    return data;
  }

  async getTable(code, date, type) {
    const { setTable } = this.props;

    try {
      let food = (await axios.get(`${API_ADDRESS}/${code}/${date}/${type}`))
        .data;

      food = food ? food[`${type}`] : null;

      setTable(food);
    } catch (error) {
      if (error.response.status !== 429) console.error(error);
      else {
        Alert.alert(
          "앗!",
          "짧은 시간동안 너무 많은 조작을 할 경우 잠시동안 서비스가 중지됩니다.\n잠시 뒤에 이용해 주세요."
        );
        setTable(false);
      }
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
      inputTable,
      posCode,
      question,
      fixYear,
      fixMonth,
      fixDay,
      setInputTable,
      cancelSetTable,
      submitSetTable,
      nextQuestion,
      init,
      year,
      month,
      day,
      meal,
      fixMeal,
      refresh,
    } = this.props;

    const { navigation } = this.props;
    const { index } = navigation.dangerouslyGetState();

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                cancelSetTable();
                this.stableGoBack();
              }}
            >
              <Icon name="ios-arrow-back" style={{ fontSize: 27 }} />
            </Button>
          </Left>
          <Body>
            <Title>식단설정-식단표</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ alignItems: "center", flex: 1 }}>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              fontSize: 20,
              lineHeight: 30,
            }}
          >
            주어진 질문에 대한 답을 정확히 적어주세요
            <Text style={{ paddingLeft: 15, fontSize: 12, lineHeight: 36 }}>
              {" "}
              남은 후보:
              <Text style={{ fontSize: 12, lineHeight: 36, color: "red" }}>
                {posCode.length}
              </Text>
              개
            </Text>
          </Text>
          <Text style={{ paddingHorizontal: 20, fontSize: 20, lineHeight: 30 }}>
            Q{question} : {fixYear}년 {fixMonth}월 {question}일의{" "}
            <Text style={{ fontSize: 23, color: "red" }}>점심</Text> 메뉴 중
            하나를 정확히 입력하세요 (밥 제외)
          </Text>
          <Item bordered style={{ width: "90%" }}>
            <Input
              placeholder="메뉴 입력"
              onChangeText={(text) => setInputTable(text)}
              value={inputTable}
            />
            <Button transparent onPress={() => setInputTable("")}>
              <Icon type="MaterialIcons" name="cancel" />
            </Button>
          </Item>
          <Button
            style={{ marginTop: 10 }}
            block
            disabled={inputTable === ""}
            onPress={debounce(async () => {
              const nextPosCode = await this.nextPos(
                posCode,
                inputTable,
                this.dateToString(new Date(fixYear, fixMonth - 1, question))
              );

              if (nextPosCode.length === 1) {
                Alert.alert(
                  "코드 설정 완료!",
                  `해당하는 식단코드는 ${nextPosCode[0]} 입니다`
                );
                this.getTable(
                  nextPosCode[0],
                  this.dateToString(new Date(fixYear, fixMonth - 1, fixDay)),
                  fixMeal
                );
                refresh();
                submitSetTable(nextPosCode[0]);
                init
                  ? navigation.navigate("SettingAllergic")
                  : this.stableGoBack();
              } else if (nextPosCode.length > 1 && question <= 2) {
                nextQuestion(nextPosCode);
              } else if (question > 2 && nextPosCode.length == 2) {
                Alert.alert(
                  "2020년 6월 공지",
                  "올바르게 입력했는데도 계속해서 후보 2개만 남는다면, 코드는 6335 또는 2171입니다. 현재 두 코드의 식단표가 동일합니다. 두 코드 중의 하나를 입력해서 사용하고, 추후 맞지 않는 경우 다른 코드로 사용하세요."
                );
                cancelSetTable();
                this.stableGoBack();
              } else {
                Alert.alert(
                  "코드 찾기 실패!",
                  "잘못 입력하였거나, 해당하는 식단표가 없습니다"
                );
                cancelSetTable();
                this.stableGoBack();
              }
            }, 200)}
          >
            <Text>다음</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default SettingCodeByTable;
