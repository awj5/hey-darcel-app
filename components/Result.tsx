import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../App";
import Back from "./result/Back";
import Heading from "./Heading";
import AnswerImage from "./result/AnswerImage";
import answers from "../data/answers.json";

type ResultProps = NativeStackScreenProps<RootStackParamList, "Result">;

interface Answer {
  id: number;
  text: string[];
  color: string;
}

export default function Result({ navigation }: ResultProps) {
  const [answer, setAnswer] = useState<Answer>({ id: 0, text: [""], color: "" });

  useEffect(() => {
    const data = JSON.stringify(answers);
    const json = JSON.parse(data);
    const rand = Math.floor(Math.random() * json.answers.length);
    const selected = json.answers[rand];
    setAnswer({ id: rand, text: selected.text, color: selected.color });
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: answer.color }]}>
      <Heading text={answer.text} />
      <AnswerImage id={answer.id} />
      <Back navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
