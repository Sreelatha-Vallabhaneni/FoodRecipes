import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
//import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';


const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  //const height = useSharedValue(60); // Initial height for collapsed state
  const height = 60

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       height: withTiming(height.value, { duration: 300 }),
//     };
//   });

  const toggleExpand = () => {
    if (expanded) {
      height.value = 60; // Collapsed height
    } else {
      height.value = 200; // Expanded height or dynamically calculate based on content
    }
    setExpanded(!expanded);
  };

  return (
    <View className="p-4">
      {/* <Animated.View className={`overflow-hidden ${animatedStyle}`}> */}
        <View className="overflow-hidden">
        <Text className="text-base text-gray-800">
          {text}
        </Text>
        </View>
      {/* </Animated.View> */}
      <TouchableOpacity onPress={toggleExpand}>
        <Text className="text-blue-500 mt-2">
          {expanded ? 'Read Less' : 'Read More'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpandableText;