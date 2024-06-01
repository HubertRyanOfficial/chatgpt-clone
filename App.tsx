import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
