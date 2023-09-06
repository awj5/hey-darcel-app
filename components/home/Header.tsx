import { StyleSheet, Text, SafeAreaView } from "react-native";
import device from "utils/device";

export default function Header() {
  const { size } = device();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, size === "large" && styles.textLarge]}>HEY DARCEL</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -1,
    paddingTop: 20,
  },
  textLarge: {
    fontSize: 24,
    lineHeight: 24,
    paddingTop: 26,
  },
});
