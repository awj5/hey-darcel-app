import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Home from "./components/Home";
import { shake } from "./utils/shake";

export default function App() {
  const shaking = shake();
  const Stack = createNativeStackNavigator();
  const [isShaking, setIsShaking] = useState(false);

  const [fontsLoaded] = useFonts({
    "Avant-Garde": require("./assets/fonts/itc-avant-garde-gothic-lt-bold.ttf"),
  });

  useEffect(() => {
    if (shaking && !isShaking) {
      setIsShaking(true);

      setTimeout(() => {
        setIsShaking(false); // Will remove
      }, 5000);
    }
  }, [shaking]);

  // Show app when font ready
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} isShaking={isShaking} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
