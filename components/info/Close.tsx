import { StyleSheet, SafeAreaView, Pressable, Platform, StatusBar } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import type { RootStackParamList } from "app";
import { pressedDefault } from "utils/helpers";
import device from "utils/device";

export default function Close(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Info"> }) {
  const { size } = device();

  const closePressed = () => {
    props.navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 }]}>
      <Pressable
        onPress={closePressed}
        style={({ pressed }) => [pressedDefault(pressed), size === "large" ? styles.closeLarge : styles.close]}
      >
        <FontAwesomeIcon icon={faCircleXmark} size={size === "large" ? 32 : 28} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "flex-end",
    position: "absolute",
  },
  close: {
    padding: 12,
  },
  closeLarge: {
    padding: 16,
  },
});
