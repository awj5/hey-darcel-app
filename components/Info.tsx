import { StyleSheet, ScrollView, View, SafeAreaView } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Close from "./info/Close";
import InfoText from "./info/InfoText";
import Darcel from "./info/Darcel";
import { styleVars } from "utils/styles";

type InfoProps = NativeStackScreenProps<RootStackParamList, "Info">;

export default function Info({ navigation }: InfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <SafeAreaView>
          <ScrollView style={styles.scroll}>
            <Darcel />
            <InfoText />
          </ScrollView>
        </SafeAreaView>
      </View>

      <Close navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styleVars.colorRed,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  scroll: {
    overflow: "visible",
  },
});
