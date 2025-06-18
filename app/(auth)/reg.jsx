import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";

import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";

const Reg = () => {
  const handleSubmit = () => {
    alert("Register form submitted!");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>
      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>
      <Spacer height={100} />
      <Link href={"/reg"}>
        <ThemedText style={{ textAlign: "center" }}>
          Register Instead
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Reg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
