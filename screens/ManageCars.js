import React from "react";

// Importing React Navigation
import { createStackNavigator } from "@react-navigation/stack";

// Importing Screens
import CarsList from "./Manage Cars/CarsList";
import AddCar from "./Manage Cars/AddCar";
import CarDetails from "./Manage Cars/CarDetail";

const Stack = createStackNavigator();
export default function ManageCars() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Cars List" component={CarsList} />
      <Stack.Screen name="Car Details" component={CarDetails} />
      <Stack.Screen name="Add Car" component={AddCar} />
    </Stack.Navigator>
  );
}
