import { StyleSheet, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { pressedDefault } from "utils/helpers";

export default function InfoIcon() {
  const infoPressed = () => {
    console.log(1);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={infoPressed} style={({ pressed }) => [pressedDefault(pressed), styles.info]}>
        <FontAwesomeIcon icon={faChevronLeft} size={28} />
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
  info: {
    padding: 16,
  },
});
