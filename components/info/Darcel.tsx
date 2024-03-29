import { StyleSheet, Image, View } from "react-native";
import device from "utils/device";

export default function Darcel() {
  const { size } = device();

  return (
    <View style={[styles.container, size === "large" && styles.containerLarge]}>
      <Image
        source={require("../../assets/darcel.png")}
        style={[styles.image, size === "large" && styles.imageLarge]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingTop: 56,
  },
  containerLarge: {
    paddingTop: 64,
  },
  image: {
    height: 360,
    resizeMode: "contain",
  },
  imageLarge: {
    height: 400,
  },
});
