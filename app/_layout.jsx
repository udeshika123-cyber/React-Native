import { Slot } from "expo-router";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Slot />
      {/* <Text>Layout is working ✅</Text> */}
    </View>
  );
}
