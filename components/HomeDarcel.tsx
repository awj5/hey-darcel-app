import { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import DarcelEye from "./DarcelEye";
import { stylesDarcel } from "../utils/styles";

export default function HomeDarcel(props: { isShaking: boolean }) {
  const mouths = ["frown", "smile", "flat"];
  const eyelids = ["none", "large", "small", "med"];

  const [darcelMouth, setDarcelMouth] = useState<string>(
    mouths[Math.floor(Math.random() * 3)]
  );

  const [darcelEyelid, setDarcelEyelid] = useState<string>(
    eyelids[Math.floor(Math.random() * 3)]
  );

  const images = {
    mouth: {
      frown: require(`../assets/darcel/mouth-frown.png`),
      smile: require(`../assets/darcel/mouth-smile.png`),
      flat: require(`../assets/darcel/mouth-flat.png`),
    },
    eyelid: {
      none: require(`../assets/darcel/eyelid-none.png`),
      closed: require(`../assets/darcel/eyelid-closed.png`),
      large: require(`../assets/darcel/eyelid-large.png`),
      small: require(`../assets/darcel/eyelid-small.png`),
      med: require(`../assets/darcel/eyelid-med.png`),
    },
  };

  // Mouth
  useEffect(() => {
    const interval = setInterval(() => {
      // 1/3 change of changing
      if (!Math.floor(Math.random() * 3)) {
        setDarcelMouth(mouths[Math.floor(Math.random() * 3)]);
      }
    }, 2000); // Changes every 2 secs

    return () => clearInterval(interval);
  }, []);

  // Eyelid
  useEffect(() => {
    const interval = setInterval(() => {
      // 1/4 change of changing
      if (!Math.floor(Math.random() * 4)) {
        setDarcelEyelid("closed"); // Blink

        setTimeout(() => {
          setDarcelEyelid(eyelids[Math.floor(Math.random() * 4)]);
        }, 250);
      }
    }, 3000); // Changes every 3 secs

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          source={require("../assets/darcel/eye-bg.png")}
          style={stylesDarcel.image}
        />
        <DarcelEye isShaking={props.isShaking} />
        <Image
          source={images.eyelid[darcelEyelid as keyof typeof images.eyelid]}
          style={stylesDarcel.image}
        />
        <Image
          source={require("../assets/darcel/head.png")}
          style={stylesDarcel.image}
        />
        <Image
          source={require("../assets/darcel/glasses.png")}
          style={stylesDarcel.image}
        />
        <Image
          source={images.mouth[darcelMouth as keyof typeof images.mouth]}
          style={stylesDarcel.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
  wrapper: {
    flex: 1,
    margin: 8,
  },
});
