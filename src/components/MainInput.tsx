import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Keyboard,
} from "react-native";

import {
  ArrowUp,
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

const MAX_WIDTH = width / 5.8;

export default function MainInput() {
  const leftSide = useSharedValue(0);
  const rightSide = useSharedValue(0);

  const [textValue, setTextValue] = useState("");
  const focusedInput = useRef(false);
  const typedInput = useRef(false);

  useEffect(() => {
    if (!typedInput.current && textValue.length >= 1) {
      typedInput.current = true;
      rightSide.value = withTiming(1, {
        duration: 200,
      });
    } else if (typedInput.current && textValue.length < 1) {
      typedInput.current = false;
      rightSide.value = withTiming(0, {
        duration: 200,
      });
    }
  }, [textValue, typedInput, rightSide]);

  const handleInputFocus = useCallback(() => {
    if (focusedInput.current) return;
    focusedInput.current = true;

    leftSide.value = withTiming(1, {
      duration: 230,
    });
  }, [focusedInput, leftSide]);

  const handleOpenOptions = useCallback(() => {
    Keyboard.dismiss();
    focusedInput.current = false;
    leftSide.value = withTiming(0, {
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

  const rightSideAnimatedMicroStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(rightSide.value, [0, 1], [1, 0]),
      marginLeft: interpolate(leftSide.value, [0, 1], [0, -22]),
      transform: [
        {
          scale: interpolate(rightSide.value, [0, 1], [1, 0]),
        },
      ],
    };
  });

  const rightSideAnimatedArrowStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(rightSide.value, [0, 1], [0, 1]),
      transform: [
        {
          scale: interpolate(rightSide.value, [0, 1], [0.1, 1]),
        },
      ],
    };
  });

  return (
    <View className="w-full h-[50px] px-4 flex-row items-center justify">
      <View className="flex-row items-center">
        <Animated.View
          className="bg-gray-200 w-[35px] h-[35px] justify-center items-center rounded-full absolute"
          style={leftPlusIconAnimatedStyles}
        >
          <TouchableOpacity onPress={handleOpenOptions}>
            <PlusIcon color="#494949" width={23} />
          </TouchableOpacity>
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

      <View className="flex-1 ml-3 mr-4">
        <View className="bg-gray-200 h-[40px] rounded-full flex-row items-center justify-between px-4">
          <TextInput
            placeholder="Message"
            placeholderTextColor="#494949"
            className="flex-1"
            selectionColor="#000000"
            onFocus={handleInputFocus}
            onBlur={() => (focusedInput.current = false)}
            value={textValue}
            onChangeText={(value) => setTextValue(value)}
          />
          <Animated.View style={rightSideAnimatedMicroStyles}>
            <TouchableOpacity>
              <MicIcon width={22} color="#494949" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      <View className="flex-row items-center pr-1.5">
        <Animated.View className="items-center justify-center">
          <TouchableOpacity>
            <HeadphonesIcon color="#000000" width={22} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          className="bg-zinc-900 right-0 w-[35px] h-[35px] justify-center items-center rounded-full absolute"
          style={rightSideAnimatedArrowStyles}
        >
          <TouchableOpacity>
            <ArrowUp color="#FFFFFF" width={22} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
