import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Page</Text>
      <Text>This is a about page</Text>
      {/* <Link href="/" style={styles.link}>
        {" "}
        Back To Home{" "}
      </Link> */}
    </View>
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
