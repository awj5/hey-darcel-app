import { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";

const images = {
  0: require("../../assets/answers/answer-0.gif"),
  1: require("../../assets/answers/answer-1.gif"),
  2: require("../../assets/answers/answer-2.gif"),
  3: require("../../assets/answers/answer-3.gif"),
  4: require("../../assets/answers/answer-4.gif"),
  5: require("../../assets/answers/answer-5.gif"),
  6: require("../../assets/answers/answer-6.gif"),
  7: require("../../assets/answers/answer-7.gif"),
  8: require("../../assets/answers/answer-8.gif"),
  9: require("../../assets/answers/answer-9.gif"),
  10: require("../../assets/answers/answer-10.gif"),
  11: require("../../assets/answers/answer-11.gif"),
  12: require("../../assets/answers/answer-12.gif"),
  13: require("../../assets/answers/answer-13.gif"),
  14: require("../../assets/answers/answer-14.gif"),
  15: require("../../assets/answers/answer-15.gif"),
  16: require("../../assets/answers/answer-16.gif"),
  17: require("../../assets/answers/answer-17.gif"),
};

export default function AnswerImage(props: { id: number }) {
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[props.id as keyof typeof images]);
  }, [props.id]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
});
