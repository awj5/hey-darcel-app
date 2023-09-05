import { StyleSheet, View, Text } from "react-native";
import device from "../utils/device";

export default function Heading(props: { text: string[] }) {
  const { size, orientation } = device();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text
          style={[
            styles.text,
            size === "large" && orientation === "portrait" && styles.largeText,
            size === "small" && styles.smallText,
          ]}
          allowFontScaling={false}
        >
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
    marginLeft: 8,
    marginRight: 8,
  },
  text: {
    fontFamily: "Avant-Garde",
    fontSize: 48,
    lineHeight: 48,
    textAlign: "center",
    letterSpacing: -2,
    color: "white",
    paddingTop: 14, // Hack to stop font cropping and vertically align
  },
  largeText: {
    fontSize: 72,
    lineHeight: 72,
    letterSpacing: -3,
    paddingTop: 20, // Hack to stop font cropping and vertically align
  },
  smallText: {
    fontSize: 36,
    lineHeight: 36,
    letterSpacing: -1,
    paddingTop: 10, // Hack to stop font cropping and vertically align
  },
});
