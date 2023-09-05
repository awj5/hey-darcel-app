import { StyleSheet, View, Text, Linking } from "react-native";
import device from "utils/device";

export default function InfoText() {
  const { size } = device();

  return (
    <View style={[styles.container, size === "large" && styles.containerLarge]}>
      <Text style={[styles.text, size === "large" && styles.textLarge]} allowFontScaling={false}>
        Hey Darcel is a sardonic take on the classic Magic 8-Ball game. Ask Darcel a question, shake your device, and
        hear his reply, whether you like it or not!{"\n\n"}Darcel is a one-eyed New Yorker; follow his misadventures
        around the city at{" "}
        <Text style={styles.link} onPress={() => Linking.openURL("https://darceldisappoints.com")}>
          darceldisappoints.com
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 32,
  },
  containerLarge: {
    padding: 32,
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -1,
    color: "white",
  },
  textLarge: {
    fontSize: 30,
    lineHeight: 30,
  },
  link: {
    textDecorationLine: "underline",
  },
});
