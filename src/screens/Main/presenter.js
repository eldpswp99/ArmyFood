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
  Card,
  CardItem,
} from "native-base";
import { View, Alert } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Appearance } from "react-native-appearance";
import axios from "axios";

import { DAY, MONTH } from "../../Enums";
import Loader from "../../components/Loader";
import { API_ADDRESS } from "react-native-dotenv";

class Main extends Component {
  addZero(elem) {
    return elem < 10 ? "0" + elem : elem;
  }

  afterDay(addnum) {
    const { year, month, day } = this.props;

    const newDay = new Date(
      new Date(year, month - 1, day).getTime() + DAY * addnum
    );

    return newDay;
  }

  setDatebyDateInstance(date) {
    const { setDate } = this.props;

    setDate(date.getFullYear(), date.getMonth() + 1, date.getDate(), false);
  }

  checkAllergic(food) {
    const { isAllergic } = this.props;

    for (let i = 1; i <= 18; i++) {
      if (isAllergic[i] && food.includes(`(${i})`)) return true;
    }

    return false;
  }

  yesterOrTodayOrTomorrow() {
    const { year, month, day, fixYear, fixDay, fixMonth } = this.props;

    const curDate = new Date(year, month - 1, day);
    const fixDate = new Date(fixYear, fixMonth - 1, fixDay);
    const timeDiff = curDate.getTime() - fixDate.getTime();
    if (timeDiff === DAY) return "(내일)";
    else if (timeDiff === -DAY) return "(어제)";
    if (timeDiff === 0) return "(오늘)";

    const dayDiff = parseInt(timeDiff / DAY);
    const sign = dayDiff > 0 ? "+" : "";
    return `(${sign}${dayDiff})`;
  }

  dateToString(date) {
    return `${date.getFullYear()}${this.addZero(
      date.getMonth() + 1
    )}${this.addZero(date.getDate())}`;
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

  nextMeal(meal) {
    let nextmeal;
    switch (meal) {
      case "brst":
        nextmeal = "lunc";
        break;
      case "lunc":
        nextmeal = "dinr";
        break;
      case "dinr":
        nextmeal = "brst";
        break;
    }

    return nextmeal;
  }

  componentDidMount() {
    const { code, year, month, day, meal } = this.props;
    this.getTable(code, this.dateToString(new Date()), `${meal}`);
  }

  render() {
    let colorScheme = Appearance.getColorScheme();
    let darkMode = colorScheme === "dark";

    const {
      code,
      table,
      isLoading,
      setMeal,
      setDate,
      setShowDatePicker,
      isDatePicker,
      year,
      month,
      day,
      meal,
      fixYear,
      fixMonth,
      fixDay,
      fixMeal,
      refresh,
    } = this.props;

    if (isLoading) return <Loader />;

    let mealVal;
    const curDate = new Date(year, month - 1, day);
    const fixDate = new Date(fixYear, fixMonth - 1, fixDay);

    switch (meal) {
      case "brst":
        mealVal = "아침";
        break;
      case "lunc":
        mealVal = "점심";
        break;
      case "dinr":
        mealVal = "저녁";
        break;
    }

    const { navigation } = this.props;
    return (
      <Container>
        <Header iosBarStyle={"light-content"}>
          <Left>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Icon name="md-menu" style={{ fontSize: 27 }} />
            </Button>
          </Left>
          <Body>
            <Title>오늘의 짬</Title>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                this.getTable(
                  code,
                  this.dateToString(new Date(fixYear, fixMonth - 1, fixDay)),
                  fixMeal
                );
                refresh();
              }}
            >
              <Icon name="md-refresh" style={{ fontSize: 27 }} />
            </Button>
            <Button transparent onPress={() => setShowDatePicker(true)}>
              <Icon name="ios-calendar" style={{ fontSize: 27 }} />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={{ alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 5,
              marginTop: 10,
            }}
          >
            {fixDate.getTime() - MONTH < curDate.getTime() ? (
              <Button
                transparent
                onPress={() => {
                  const prevDay = this.afterDay(-1);
                  this.getTable(code, this.dateToString(prevDay), meal);

                  this.setDatebyDateInstance(prevDay);
                }}
              >
                <Icon type="Entypo" name="controller-fast-backward" />
              </Button>
            ) : null}
            <Text
              style={{ paddingRight: 10, fontSize: 20, fontWeight: "bold" }}
            >
              {this.addZero(month)}.{this.addZero(day)}{" "}
              {this.yesterOrTodayOrTomorrow()} |
            </Text>
            <Button
              bordered
              dark
              onPress={() => {
                this.getTable(
                  code,
                  this.dateToString(new Date(year, month - 1, day)),
                  this.nextMeal(meal)
                );
                setMeal(this.nextMeal(meal));
              }}
              style={{ borderRadius: 7 }}
            >
              <Text style={{ fontSize: 20 }}>{mealVal}</Text>
            </Button>
            {fixDate.getTime() + MONTH > curDate.getTime() ? (
              <Button
                transparent
                onPress={() => {
                  const postDay = this.afterDay(1);
                  this.getTable(code, this.dateToString(postDay), meal);
                  this.setDatebyDateInstance(postDay);
                }}
              >
                <Icon type="Entypo" name="controller-fast-forward" />
              </Button>
            ) : null}
          </View>
          <Card style={{ padding: 10, width: "95%", borderRadius: 10 }}>
            {table ? (
              table.map((elem) => (
                <CardItem key={elem + Math.random()}>
                  <Body>
                    <Text
                      style={{
                        fontSize: 20,
                        padding: 0,
                        color: this.checkAllergic(elem) ? "#ff7a00" : "black",
                      }}
                    >
                      {elem}
                    </Text>
                  </Body>
                </CardItem>
              ))
            ) : (
              <CardItem>
                <Body>
                  <Text>데이터를 불러오는 중입니다...</Text>
                  <Text></Text>
                  <Text style={{ fontSize: 16, lineHeight: 24 }}>
                    장시간 기다려도 식단이 나오지 않는 경우, 식단표가 업로드되지
                    않았을 수 있습니다.
                  </Text>
                </Body>
              </CardItem>
            )}
          </Card>
          <View style={{ marginTop: 5 }}>
            <Text>현재 제공받는 식단표의 식단코드는 {`${code}`}입니다.</Text>
          </View>
          <DateTimePickerModal
            isVisible={isDatePicker}
            mode="date"
            onConfirm={(date) => {
              this.getTable(code, this.dateToString(date), meal);
              setDate(
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                false
              );
            }}
            onCancel={() => setShowDatePicker(false)}
            maximumDate={fixDate.getTime() + MONTH}
            minimumDate={fixDate.getTime() - MONTH}
            isDarkModeEnabled={darkMode}
          />
        </Content>
      </Container>
    );
  }
}

export default Main;
