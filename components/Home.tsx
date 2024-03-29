import { useState, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import type { RootStackParamList } from "../App";
import Heading from "./Heading";
import Darcel from "./home/Darcel";
import InfoIcon from "./home/InfoIcon";
import Header from "./home/Header";
import shake from "utils/shake";
import { styleVars } from "utils/styles";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function Home({ navigation }: HomeProps) {
  const shaking = shake();
  const [isShaking, setIsShaking] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsShaking(false);
    }, [])
  );

  useEffect(() => {
    if (shaking && !isShaking) {
      setIsShaking(true);

      setTimeout(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        navigation.navigate("Result");
      }, 5000);
    }
  }, [shaking]);

  return (
    <View style={styles.container}>
      <Header />
      <InfoIcon navigation={navigation} />
      <Heading text={["Ask me a", "question", "then shake!"]} />
      <Darcel isShaking={isShaking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: styleVars.colorYellow,
  },
});
