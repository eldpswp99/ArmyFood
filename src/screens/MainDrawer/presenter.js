import React, { Component } from "react";
import * as Enums from "../../Enums";
import { Linking } from "expo";
import { EMAIL } from "react-native-dotenv";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import SettingAllergic from "../SettingAllergic";
import SettingCodeByTable from "../SettingCodeByTable";
import SettingCodeByCode from "../SettingCodeByCode";
import Main from "../Main";

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="개발자에게 메일보내기"
        onPress={() => Linking.openURL(`mailto:${EMAIL}`)}
      />
    </DrawerContentScrollView>
  );
}

class MainDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        initialRouteName="Main"
      >
        <Drawer.Screen name="앱 버전 : 1.3.0" component={Main} />

        <Drawer.Screen name="알레르기 설정" component={SettingAllergic} />
        <Drawer.Screen name="식단설정-식단표" component={SettingCodeByTable} />
        <Drawer.Screen name="식단설정-코드" component={SettingCodeByCode} />
      </Drawer.Navigator>
    );
  }
}

export default MainDrawer;
