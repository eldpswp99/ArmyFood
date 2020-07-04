import React, { Component } from "react";
import Rate, { AndroidMarket } from "react-native-rate";
import debounce from "lodash.debounce";

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
        label="리뷰 남기기"
        onPress={debounce(() => {
          const options = {
            GooglePackageName: "com.eldpswp99.foodtable",
            preferredAndriodMarker: AndroidMarket.Google,
          };

          Rate.rate(options, (success) => {
            props.navigation.closeDrawer();
          });
        }, 200)}
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
        <Drawer.Screen name="앱 버전 : 2.0.4" component={Main} />

        <Drawer.Screen name="알레르기 설정" component={SettingAllergic} />
        <Drawer.Screen name="식단설정-식단표" component={SettingCodeByTable} />
        <Drawer.Screen name="식단설정-코드" component={SettingCodeByCode} />
      </Drawer.Navigator>
    );
  }
}

export default MainDrawer;
