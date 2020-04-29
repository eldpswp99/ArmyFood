import React, { Component } from "react";
import { Container, Icon, Button, Text } from "native-base";
import { Image, View } from "react-native";
import { DAY } from "../../Enums";

class Loader extends Component {
  getData = async () => {
    let mealDate = new Date();
    const { setFixDate, load, loadEnd } = this.props;
    const hour = mealDate.getHours();

    setFixDate(
      mealDate.getFullYear(),
      mealDate.getMonth() + 1,
      mealDate.getDate()
    );
    let meal = "brst";
    if (9 <= hour && hour <= 12) meal = "lunc";
    else if (13 <= hour && hour <= 18) meal = "dinr";
    else if (hour >= 19) {
      mealDate = new Date(mealDate.getTime() + DAY);
    }

    load(
      mealDate.getFullYear(),
      mealDate.getMonth() + 1,
      mealDate.getDate(),
      meal
    );

    loadEnd();
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return <View />;
  }
}

export default Loader;
