import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import * as Haptics from "expo-haptics";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Heading from "./Heading";
import Darcel from "./home/Darcel";
import InfoIcon from "./home/InfoIcon";
import { shake } from "utils/shake";
import { styleVars } from "utils/styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  const shaking = shake();
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (shaking && !isShaking) {
      setIsShaking(true);

      // WIP
      setTimeout(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        //navigation.navigate("Result");
        setIsShaking(false); // Will remove
      }, 5000);
    }
  }, [shaking]);

  return (
    <SafeAreaView style={styles.container}>
      <Heading text={["Ask me a", "question", "then shake!"]} />
      <Darcel isShaking={isShaking} />
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
