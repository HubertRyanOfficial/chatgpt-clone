import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

import { DrawerHeaderProps } from "@react-navigation/drawer";
import { EllipsisVertical, Menu } from "lucide-react-native";

export default function DrawerHeader({
  navigation,
  options,
}: DrawerHeaderProps) {
  return (
    <View className="h-[50px] w-full flex-row items-center justify-between px-4 bg-white">
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Menu color="#000000" />
      </TouchableOpacity>
      <View className="bg-gray-200 px-4 py-2 rounded-lg">
        <Text>Get Plus</Text>
      </View>
      <TouchableOpacity>
        <EllipsisVertical color="#000000" />
      </TouchableOpacity>
    </View>
  );
}
