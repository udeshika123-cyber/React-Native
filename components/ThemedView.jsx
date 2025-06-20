import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  // const theme = Colors[colorScheme] ?? Colors.light;
  const theme = Colors[colorScheme ?? "light"] ?? Colors.light;
  if (!safe)
    return (
      <View
        style={[
          {
            backgroundColor: theme.background,
          },
          style,
        ]}
        {...props}
      />
    );
  // If safe is true, we assume the view is used inside a SafeAreaView
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
