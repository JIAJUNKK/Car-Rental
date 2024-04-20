import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./src/navigator/tabbar";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.droidSafeArea}/>
        <NavigationContainer>
          <BottomTabNavigator/>
        </NavigationContainer>
      <SafeAreaView edges={["bottom"]} style={{ flex: 0, backgroundColor: "black" }}/>
    </>

  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    backgroundColor: "#F9F5F5",
    paddingBottom: Platform.OS === "android" ? 35 : 0,
  },
});
