import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

export const shake = () => {
  const [shaking, setShaking] = useState<boolean>(false);
  var prevX: number, prevY: number, prevZ: number;
  var then = 0;

  useEffect(() => {
    Accelerometer.setUpdateInterval(100);

    Accelerometer.addListener((accelerometerData) => {
      let { x, y, z } = accelerometerData;
      let now = Date.now();
      let diff = now - then;

      if (diff > 100) {
        let speed =
          (Math.abs(x + y + z - prevX - prevY - prevZ) / diff) * 10000;
        setShaking(speed > 100 ? true : false); // Increase for lower sensitivity
        prevX = x;
        prevY = y;
        prevZ = z;
        then = now;
      }
    });

    return () => Accelerometer.removeAllListeners();
  }, []);

  return shaking;
};
