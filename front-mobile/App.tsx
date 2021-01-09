import React from "react";
import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View } from "react-native";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes";

const App = () => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;