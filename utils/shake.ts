import { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";

const shake = () => {
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    var prevX: number, prevY: number, prevZ: number;
    var then = 0;
    Accelerometer.setUpdateInterval(100);

    Accelerometer.addListener((accelerometerData) => {
      const { x, y, z } = accelerometerData;
      const now = Date.now();
      const diff = now - then;

      if (diff > 100) {
        const speed = (Math.abs(x + y + z - prevX - prevY - prevZ) / diff) * 10000;
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

export default shake;
