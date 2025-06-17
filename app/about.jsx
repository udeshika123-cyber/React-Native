import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";

const About = () => {
  const ColorScheme = useColorScheme();
  const theme = Colors[ColorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.title}>About Page</Text>
      <Text>This is a about page</Text>
      {/* <Link href="/" style={styles.link}>
        {" "}
        Back To Home{" "}
      </Link> */}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  link: {
    marginVertical: 40,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});
