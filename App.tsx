import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/pages/Home/Home";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  return (
    <View>
      <StatusBar backgroundColor="#1d1d2e" style="light" translucent={false} />
      <Home />
    </View>
  );
}
