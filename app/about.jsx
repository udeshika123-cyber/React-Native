import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "../constants/Colors";
import ThemedView from "../components/ThemedView";

import ThemedText from "../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <ThemedText>This is a about page</ThemedText>
    </ThemedView>
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
