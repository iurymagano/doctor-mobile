import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Home from "./src/pages/Home/Home";

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor="#1d1d2e" style="light" translucent={false} />
      <Home />
    </View>
  );
}
