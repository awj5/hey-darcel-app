import { StyleSheet, View, Text } from "react-native";

export default function Heading(props: { text: string[] }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          {props.text.map((line, i) => (
            <Text key={i}>
              {line}
              {i !== props.text.length - 1 && "\n"}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "25%",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    margin: 8,
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 48,
    lineHeight: 40,
    textAlign: "center",
    letterSpacing: -2,
    color: "white",
    paddingTop: 22, // Hack to stop font cropping and vertically align
  },
});
