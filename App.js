import React from "react";
import { useEffect } from "react";
import * as Font from "expo-font";

// import React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importing Screens
import ManageCars from "./screens/ManageCars";
import ManageCarBrands from "./screens/ManageCarBrands";

const Drawer = createDrawerNavigator();
export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = function () {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Manage Cars" component={ManageCars} />
        <Drawer.Screen name="Manage Car Brands" component={ManageCarBrands} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
