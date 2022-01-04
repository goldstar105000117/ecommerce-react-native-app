import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { DrawerRoutes } from "../@types/navigation";
import BottomTabNavigator from "./BottomTabNavigator";
import { CheckOutScreen } from "../screens/StackScreens";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./componets/DrawerContent";
import { useTheme } from "@react-navigation/native";

const { Navigator, Screen } = createDrawerNavigator<DrawerRoutes>();

const AppNavigator = () => {
  const { width } = useWindowDimensions();
  const { primary: backgroundColor } = useTheme().colors;
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerStyle: { width: width / 2, backgroundColor: "#5956E9" },
        overlayColor: "transparent",
      }}
      initialRouteName="BottomTab"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="BottomTab" component={BottomTabNavigator} />
      <Screen name="My orders" component={CheckOutScreen} />
    </Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
