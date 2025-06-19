import { StyleSheet, Text, View, Image } from "react-native";

import { Link } from "expo-router";

import ThemedView from "../components/ThemedView.jsx";
import ThemedLogo from "../components/ThemedLogo.jsx";
import Spacer from "../components/Spacer.jsx";
import ThemedText from "../components/ThemedText.jsx";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={styles.title} title={true}>
        Hello Everyone nice to meet you
      </ThemedText>
      <Spacer height={10} />
      <ThemedText>Reading list item</ThemedText>
      <Spacer />
      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/reg" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
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
