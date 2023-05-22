import { StyleSheet, View } from "react-native";
import Heading from "./Heading";
import HomeDarcel from "./HomeDarcel";

export default function Home(props: { isShaking: boolean }) {
  return (
    <View style={styles.container}>
      <Heading text={["Ask me a", "question", "then shake!"]} />
      <HomeDarcel isShaking={props.isShaking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
