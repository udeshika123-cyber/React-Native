import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Logo from "../assets/img/logo.jpg";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.title}>Hello Everyone nice to meet you</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list item</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
};

export default Home;

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
    marginVertical: 10,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});
