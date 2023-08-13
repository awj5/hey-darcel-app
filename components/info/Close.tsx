import { StyleSheet, View, Pressable } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons/faCircleXmark";
import { pressedDefault } from "utils/helpers";
import type { RootStackParamList } from "app";

export default function Close(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Info"> }) {
  const closePressed = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={closePressed} style={({ pressed }) => [pressedDefault(pressed), styles.close]}>
        <FontAwesomeIcon icon={faCircleXmark} size={28} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "flex-end",
  },
  close: {
    padding: 12,
    paddingTop: 18,
  },
});
