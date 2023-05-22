import { useRef, useState, useEffect } from "react";
import { Animated, LayoutChangeEvent, Easing } from "react-native";
import { stylesDarcel } from "../utils/styles";

export default function DarcelEye(props: { isShaking: boolean }) {
  const [darcelHeight, setDarcelHeight] = useState(0);
  const eyeX = useRef(new Animated.Value(0)).current;
  const eyeY = useRef(new Animated.Value(0)).current;
  const eyePos = useRef("C");

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setDarcelHeight(height);
  };

  const animateEye = ({ speed = 350 }: { speed?: number } = {}) => {
    var directions = ["C", "E", "SE", "S", "SW", "W"];

    if (props.isShaking) {
      switch (eyePos.current) {
        case "N":
          directions = ["SE", "S", "SW"];
          break;
        case "NE":
          directions = ["S", "SW", "W"];
          break;
        case "E":
          directions = ["SW", "W", "NW"];
          break;
        case "SE":
          directions = ["N", "W", "NW"];
          break;
        case "S":
          directions = ["N", "NE", "NW"];
          break;
        case "SW":
          directions = ["N", "NE", "E"];
          break;
        case "W":
          directions = ["NE", "E", "SE"];
          break;
        case "NW":
          directions = ["E", "SE", "S"];
          break;
        default:
          // Center
          directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
      }
    }

    const direction =
      speed === 250
        ? "C"
        : directions[Math.floor(Math.random() * directions.length)]; // Center if last move in shake
    const offset =
      darcelHeight /
      ((direction === "SE" ||
        direction === "SW" ||
        direction === "NE" ||
        direction === "NW"
        ? 10.6
        : 7.5) +
        (!props.isShaking ? 6 : 0)); // More offset for diagonal and if shaking
    var x: number;
    var y: number;

    switch (direction) {
      case "N":
        x = 0;
        y = 0 - offset;
        break;
      case "NE":
        x = offset;
        y = 0 - offset;
        break;
      case "E":
        x = offset;
        y = 0;
        break;
      case "SE":
        x = offset;
        y = offset;
        break;
      case "S":
        x = 0;
        y = offset;
        break;
      case "SW":
        x = 0 - offset;
        y = offset;
        break;
      case "W":
        x = 0 - offset;
        y = 0;
        break;
      case "NW":
        x = 0 - offset;
        y = 0 - offset;
        break;
      default:
        // Center
        x = 0;
        y = 0;
    }

    Animated.timing(eyeX, {
      toValue: x,
      duration: speed,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    Animated.timing(eyeY, {
      toValue: y,
      duration: speed,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    eyePos.current = direction;
  };

  const shakeEye = (count: number) => {
    const speed = count * 10;
    animateEye({ speed: speed });

    if (count < 25) {
      setTimeout(() => {
        shakeEye((count += 1));
      }, speed);
    }
  };

  useEffect(() => {
    if (props.isShaking) {
      shakeEye(0);
    } else if (darcelHeight) {
      const interval = setInterval(() => {
        // 1/2 change of changing
        if (!Math.floor(Math.random() * 2)) {
          animateEye();
        }
      }, 1000); // Changes every 1 sec

      return () => clearInterval(interval);
    }
  }, [darcelHeight, props.isShaking]);

  return (
    <Animated.Image
      onLayout={onLayout}
      source={require("../assets/darcel/eye.png")}
      style={[
        stylesDarcel.image,
        { transform: [{ translateX: eyeX }, { translateY: eyeY }] },
      ]}
    />
  );
}
