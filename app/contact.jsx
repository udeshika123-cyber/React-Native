import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={[styles.container]}>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <ThemedText>This is a contact page</ThemedText>
    </ThemedView>
  );
};

export default Contact;

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
