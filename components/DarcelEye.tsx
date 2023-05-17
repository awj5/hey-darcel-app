import { useRef, useState, useEffect } from "react";
import { Animated, LayoutChangeEvent, Easing } from "react-native";
import { stylesDarcel } from "../utils/styles";

export default function DarcelEye(props: { isShaking: boolean }) {
  const [darcelHeight, setDarcelHeight] = useState<number>(0);
  const eyeX = useRef(new Animated.Value(0)).current;
  const eyeY = useRef(new Animated.Value(0)).current;

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setDarcelHeight(height);
  };

  const animateEye = () => {
    const directions = ["C", "E", "SE", "S", "SW", "W", "NW", "N", "NE"];
    const direction = directions[Math.floor(Math.random() * 6)];
    const offset =
      darcelHeight / (direction === "SE" || direction === "SW" ? 16 : 12); // More offset for 45°
    var x: number;
    var y: number;

    switch (direction) {
      case "E":
        // East
        x = offset;
        y = 0;
        break;
      case "SE":
        // South east
        x = offset;
        y = offset;
        break;
      case "S":
        // South
        x = 0;
        y = offset;
        break;
      case "SW":
        // South west
        x = 0 - offset;
        y = offset;
        break;
      case "W":
        // West
        x = 0 - offset;
        y = 0;
        break;
      default:
        // Center
        x = 0;
        y = 0;
    }

    Animated.timing(eyeX, {
      toValue: x,
      duration: 350,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();

    Animated.timing(eyeY, {
      toValue: y,
      duration: 350,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // 1/2 change of changing
      if (!Math.floor(Math.random() * 2) && !props.isShaking) {
        animateEye();
      }
    }, 1000); // Changes every 1 sec

    return () => clearInterval(interval);
  }, [darcelHeight]);

  useEffect(() => {
    if (props.isShaking) {
      const interval = setInterval(() => {
        animateEye();
      }, 250); // Changes every .25 secs

      return () => clearInterval(interval);
    }
  }, [props.isShaking]);

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
