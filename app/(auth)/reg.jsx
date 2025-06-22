import { Keyboard, StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useState } from "react";
import { Colors } from "../../constants/Colors";

import ThemedView from "../../components/ThemedView";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import Spacer from "../../components/Spacer";
import { TouchableWithoutFeedback } from "react-native";
import { useUser } from "../../hooks/useUser";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useUser(null);

  // const handleSubmit = async () => {
  //   try {
  //     await register(email, password);
  //   } catch (error) {}
  // };
  const handleSubmit = async () => {
    setError(null);
    const trimmedEmail = email.trim();

    if (
      !trimmedEmail ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".")
    ) {
      setError("Please enter a valid email address.");

      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    try {
      await register(trimmedEmail, password);
    } catch (error) {
      console.error("Registration Error:", error);
      alert(error.message || "Registration failed.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 10 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 10 }}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />

        <ThemedButton onPress={handleSubmit}>
          <Text style={{ color: "#f2f2f2" }}>Register</Text>
        </ThemedButton>
        <Spacer />
        {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
        <ThemedText style={{ textAlign: "center" }}>
          Already have an account
        </ThemedText>
        <Link href={"/login"}>
          <ThemedText style={{ textAlign: "center" }}>Login Instead</ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
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
  error: {
    color: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderRadius: 1,
    borderWidth: 6,
    marginHorizontal: 10,
  },
});
