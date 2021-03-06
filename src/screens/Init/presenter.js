import React, { Component } from "react";
import { Container, Icon, Button, Text } from "native-base";

class Init extends Component {
  getData = () => {
    let mealDate = new Date();
    const { setFixDate, setCodeInv, allCode } = this.props;
    setFixDate(
      mealDate.getFullYear(),
      mealDate.getMonth() + 1,
      mealDate.getDate()
    );

    const codeInv = {};
    allCode.forEach((elem, idx) => {
      codeInv[`${elem}`] = idx;
    });

    setCodeInv(codeInv);
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const { isLoading, navigation } = this.props;

    return (
      <Container style={{ alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "BMHANNA_11yrs",
            fontSize: 50,
            marginTop: "60%",
            fontSize: 30,
          }}
        >
          오늘의 짬
        </Text>
        <Text style={{ marginTop: "2%" }}>군대식단</Text>

        <Button
          style={{ marginTop: 100 }}
          block
          onPress={() => navigation.navigate("SettingCodeByTable")}
        >
          <Text>식단표로 식단 설정하기</Text>
        </Button>
        <Button
          style={{ marginTop: 35 }}
          block
          onPress={() => navigation.navigate("SettingCodeByCode")}
        >
          <Text>식단코드로 식단 설정하기</Text>
        </Button>
      </Container>
    );
  }
}

export default Init;
