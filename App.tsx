import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import Home from "./components/Home";
import InfoIcon from "./components/InfoIcon";
import { styleVars } from "./utils/styles";
import { shake } from "./utils/shake";

export default function App() {
  const shaking = shake();
  const [isShaking, setIsShaking] = useState(false);

  const [fontsLoaded] = useFonts({
    "Avant-Garde": require("./assets/fonts/itc-avant-garde-gothic-lt-bold.ttf"),
  });

  useEffect(() => {
    if (shaking && !isShaking) {
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false); // Will remove
      }, 5000);
    }
  }, [shaking]);

  // Show app when font ready
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Home isShaking={isShaking} />
      <InfoIcon />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleVars.colorYellow,
    justifyContent: "center",
  },
});
