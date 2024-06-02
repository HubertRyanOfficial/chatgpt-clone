import { View, Text } from "react-native";
import React, { memo } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { LoaderCircle } from "lucide-react-native";

function Loader() {
  const rotate = useSharedValue(0);

  rotate.value = withRepeat(
    withTiming(360, { duration: 800, easing: Easing.linear }),
    -1
  );

  const loaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotate.value}deg`,
        },
      ],
    };
  });

  return (
    <Animated.View style={loaderStyle}>
      <LoaderCircle color="#000000" width={25} />
    </Animated.View>
  );
}

export default memo(Loader);
