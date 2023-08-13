import { StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Close from "./info/Close";
import { styleVars } from "utils/styles";

type InfoProps = NativeStackScreenProps<RootStackParamList, "Info">;

export default function Info({ navigation }: InfoProps) {
  return (
    <View style={styles.container}>
      <Close navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleVars.colorRed,
  },
});
