import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./App/Navigation/HomeNavigation";

export default function App() {
  return (
    <View
      style={{
        padding: 15,
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingTop: 50,
      }}
    >
      <NavigationContainer>
        <HomeNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
