import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import type { RootStackParamList } from "app";
import { pressedDefault } from "utils/helpers";
import device from "utils/device";

export default function InfoIcon(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Home"> }) {
  const { size } = device();

  const infoPressed = () => {
    props.navigation.navigate("Info");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={infoPressed}
        style={({ pressed }) => [pressedDefault(pressed), size === "large" ? styles.infoLarge : styles.info]}
      >
        <FontAwesomeIcon icon={faCircleInfo} size={size === "large" ? 32 : 28} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
  },
  info: {
    padding: 12,
  },
  infoLarge: {
    padding: 16,
  },
});
