import { StyleSheet, SafeAreaView } from "react-native";
import Heading from "./Heading";
import HomeDarcel from "./HomeDarcel";
import InfoIcon from "./InfoIcon";
import { styleVars } from "../utils/styles";

export default function Home(props: { isShaking: boolean }) {
  return (
    <SafeAreaView style={styles.container}>
      <Heading text={["Ask me a", "question", "then shake!"]} />
      <HomeDarcel isShaking={props.isShaking} />
      <InfoIcon />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: styleVars.colorYellow,
  },
});
