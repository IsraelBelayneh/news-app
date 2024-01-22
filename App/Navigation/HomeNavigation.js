import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import ReadNews from "../Screens/ReadNews";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="readnews" component={ReadNews} />
    </Stack.Navigator>
  );
}

export default HomeNavigation;
