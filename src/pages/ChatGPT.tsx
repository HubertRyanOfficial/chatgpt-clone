import { View, Text } from "react-native";
import React from "react";

import ChatGPTClone from "../assets/logo.svg";
import MainInput from "../components/MainInput";

export default function ChatGPT() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center">
        <ChatGPTClone />
      </View>
      <MainInput />
    </View>
  );
}
