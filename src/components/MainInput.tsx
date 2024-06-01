import React, { useCallback, useRef, useState } from "react";
import { View, TouchableOpacity, TextInput, Dimensions } from "react-native";

import {
  CameraIcon,
  FolderIcon,
  HeadphonesIcon,
  ImageIcon,
  MicIcon,
  PlusIcon,
} from "lucide-react-native";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

const MAX_WIDTH = width / 5.5;

export default function MainInput() {
  const leftSide = useSharedValue(0);

  const [textValue, setTextValue] = useState("");
  const focusedInput = useRef(false);

  const handleInputFocus = useCallback(() => {
    if (focusedInput.current) return;
    focusedInput.current = true;

    leftSide.value = withTiming(1, {
      duration: 230,
    });
  }, [focusedInput, leftSide]);

  const leftSideAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(leftSide.value, [0, 1], [1, 0]),
      marginRight: interpolate(leftSide.value, [0, 1], [0, -MAX_WIDTH]),
      transform: [
        {
          scale: interpolate(leftSide.value, [0, 1], [1, 0.1]),
        },
      ],
    };
  });

  const leftPlusIconAnimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(leftSide.value, [0, 1], [0, 1]),
      transform: [
        {
          scale: interpolate(leftSide.value, [0, 1], [0.1, 1]),
        },
      ],
    };
  });

  return (
    <View className="w-full h-[50px] px-4 flex-row items-center justify ">
      <View className="flex-row items-center">
        <Animated.View
          className="bg-gray-200 w-[35px] h-[35px] justify-center items-center rounded-full absolute"
          style={leftPlusIconAnimatedStyles}
        >
          <PlusIcon color="#494949" width={23} />
        </Animated.View>
        <Animated.View
          className="flex-row items-center gap-x-4"
          style={leftSideAnimatedStyles}
        >
          <TouchableOpacity>
            <CameraIcon color="#000000" width={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ImageIcon color="#000000" width={22} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FolderIcon color="#000000" width={22} />
          </TouchableOpacity>
        </Animated.View>
      </View>

      <View className="flex-1 mx-4">
        <View className="bg-gray-200 h-[40px] rounded-full flex-row items-center justify-between px-4">
          <TextInput
            placeholder="Message"
            placeholderTextColor="#494949"
            className="flex-1"
            selectionColor="#000000"
            onFocus={handleInputFocus}
            value={textValue}
            onChangeText={(value) => setTextValue(value)}
          />
          <TouchableOpacity>
            <MicIcon width={22} color="#494949" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity>
        <HeadphonesIcon color="#000000" width={22} />
      </TouchableOpacity>
    </View>
  );
}
