import { StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";

import ThemedText from "../../components/ThemedText";

import Spacer from "../../components/Spacer";

const Reg = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register for an account
      </ThemedText>
      <Spacer height={100} />
      <Link href={"/reg"}>
        <ThemedText style={{ textAlign: "center" }}>Login Instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Reg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
