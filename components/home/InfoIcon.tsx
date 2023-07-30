import { StyleSheet, View, Pressable } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons/faCircleInfo";
import { pressedDefault } from "utils/helpers";
import type { RootStackParamList } from "app";

export default function InfoIcon(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Home"> }) {
  const infoPressed = () => {
    props.navigation.navigate("Result");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={infoPressed} style={({ pressed }) => [pressedDefault(pressed), styles.info]}>
        <FontAwesomeIcon icon={faCircleInfo} size={28} />
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
  info: {
    padding: 16,
  },
});
