import { useState, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import Eye from "./darcel/Eye";
import { stylesDarcel } from "utils/styles";

export default function Darcel(props: { isShaking: boolean }) {
  const mouths = ["frown", "smile", "flat"];
  const eyelids = ["none", "small", "med", "large"];
  const [darcelMouth, setDarcelMouth] = useState(mouths[Math.floor(Math.random() * 3)]);
  const [darcelEyelid, setDarcelEyelid] = useState(eyelids[Math.floor(Math.random() * 4)]);

  const images = {
    mouth: {
      frown: require(`../../assets/darcel/mouth-frown.png`),
      smile: require(`../../assets/darcel/mouth-smile.png`),
      flat: require(`../../assets/darcel/mouth-flat.png`),
      zigZag: require(`../../assets/darcel/mouth-zig-zag.png`),
    },
    eyelid: {
      none: require(`../../assets/darcel/eyelid-none.png`),
      small: require(`../../assets/darcel/eyelid-small.png`),
      med: require(`../../assets/darcel/eyelid-med.png`),
      large: require(`../../assets/darcel/eyelid-large.png`),
      closed: require(`../../assets/darcel/eyelid-closed.png`),
    },
  };

  // Mouth
  useEffect(() => {
    if (props.isShaking) {
      setDarcelMouth("zigZag");
    } else {
      // Reset after shake
      if (darcelMouth === "zigZag") {
        setDarcelMouth(mouths[Math.floor(Math.random() * 3)]);
      }

      const interval = setInterval(() => {
        // 1/3 change of changing
        if (!Math.floor(Math.random() * 3)) {
          setDarcelMouth(mouths[Math.floor(Math.random() * 3)]);
        }
      }, 2000); // Changes every 2 secs

      return () => clearInterval(interval);
    }
  }, [props.isShaking]);

  // Eyelid
  useEffect(() => {
    if (props.isShaking) {
      setDarcelEyelid("none");
    } else {
      var timeout: ReturnType<typeof setTimeout>;

      const interval = setInterval(() => {
        // 1/3 change of closing
        if (!Math.floor(Math.random() * 3)) {
          setDarcelEyelid("closed"); // Blink

          timeout = setTimeout(() => {
            setDarcelEyelid(eyelids[Math.floor(Math.random() * 4)]);
          }, 250);
        }
      }, 3000); // Changes every 3 secs

      return () => {
        clearTimeout(timeout);
        clearInterval(interval);
      };
    }
  }, [props.isShaking]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={require("../../assets/darcel/eye-bg.png")} style={stylesDarcel.image} />
        <Eye isShaking={props.isShaking} />
        <Image source={images.eyelid[darcelEyelid as keyof typeof images.eyelid]} style={stylesDarcel.image} />
        <Image source={require("../../assets/darcel/head.png")} style={stylesDarcel.image} />
        <Image source={require("../../assets/darcel/glasses.png")} style={stylesDarcel.image} />
        <Image source={images.mouth[darcelMouth as keyof typeof images.mouth]} style={stylesDarcel.image} />
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
