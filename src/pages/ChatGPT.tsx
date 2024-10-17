import { View, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import React from "react";

import ChatGPTClone from "../assets/logo.svg";
import MainInput from "../components/MainInput";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ChatGPT() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center">
          <ChatGPTClone />
        </View>
        <MainInput />
      </View>
    </KeyboardAvoidingView>
  );
}
