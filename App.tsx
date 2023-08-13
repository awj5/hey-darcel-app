import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Result from "./components/Result";
import Info from "./components/Info";

export type RootStackParamList = {
  Home: undefined;
  Result: undefined;
  Info: undefined;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const [fontsLoaded] = useFonts({
    "Avant-Garde": require("./assets/fonts/itc-avant-garde-gothic-lt-bold.ttf"),
  });

  // Show app when font ready
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Info" component={Info} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
