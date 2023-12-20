import { StyleSheet, SafeAreaView, Pressable, Text, Platform, StatusBar } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import type { RootStackParamList } from "app";
import { pressedDefault } from "utils/helpers";
import device from "utils/device";

export default function Back(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Result"> }) {
  const { size } = device();

  const backPressed = () => {
    props.navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 }]}>
      <Pressable
        onPress={backPressed}
        style={({ pressed }) => [pressedDefault(pressed), styles.back, size === "large" && styles.backLarge]}
      >
        <FontAwesomeIcon icon={faChevronLeft} size={size === "large" ? 32 : 28} />
        <Text style={[styles.text, size === "large" && styles.textLarge]} allowFontScaling={false}>
          Try again
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  back: {
    padding: 12,
    paddingLeft: 8,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  backLarge: {
    padding: 16,
    paddingLeft: 12,
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 24,
    letterSpacing: -1,
  },
  textLarge: {
    fontSize: 30,
  },
});
