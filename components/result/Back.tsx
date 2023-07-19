import { StyleSheet, View, Pressable, Text } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { pressedDefault } from "utils/helpers";
import type { RootStackParamList } from "app";

export default function Back(props: { navigation: NativeStackNavigationProp<RootStackParamList, "Result"> }) {
  const backPressed = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={backPressed} style={({ pressed }) => [pressedDefault(pressed), styles.back]}>
        <FontAwesomeIcon icon={faChevronLeft} size={28} />
        <Text style={styles.text}>Back</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  back: {
    padding: 16,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 24,
    letterSpacing: -1,
  },
});
