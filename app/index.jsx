import { StyleSheet, Text, View, Image } from "react-native";

import Logo from "../assets/img/logo.jpg";
import { Link } from "expo-router";

import ThemedView from "../components/ThemedView.jsx";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.title}>Hello Everyone nice to meet you</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading list item</Text>
      <Link href="/about" style={styles.link}>
        About
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </ThemedView>
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
  img: {
    backgroundColor: "#e0dfe8",
  },
});
