import { StyleSheet, SafeAreaView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Back from "./result/Back";

type ResultProps = NativeStackScreenProps<RootStackParamList, "Result">;

export default function Result({ navigation }: ResultProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Back />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
});
