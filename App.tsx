import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Result from "./components/Result";

export type RootStackParamList = {
  Home: undefined;
  Result: undefined;
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Avant-Garde": require("./assets/fonts/itc-avant-garde-gothic-lt-bold.ttf"),
  });

  // Show app when font ready
  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
