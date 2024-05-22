import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import ChatGPT from "./src/assets/logo.svg";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <ChatGPT width={100} height={100} />
    </View>
  );
}
