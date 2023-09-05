import { useWindowDimensions } from "react-native";

type Device = {
  size: string;
  orientation: string;
};

const device = (): Device => {
  const { width, height } = useWindowDimensions();

  return {
    size:
      width <= 320 ? "small" : (width >= 744 && width < height) || (width >= 1024 && width > height) ? "large" : "base",
    orientation: width < height ? "portrait" : "landscape",
  };
};
export default device;
