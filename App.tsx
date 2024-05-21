import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ChatGPT from "./src/assets/logo.svg";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatGPT width={100} height={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
