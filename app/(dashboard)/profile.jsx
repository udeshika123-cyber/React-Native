import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  const { logout, user, authChecked } = useUser();

  if (!authChecked) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText>Loading...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText title style={styles.heading}>
        {user?.email}
      </ThemedText>
      <Spacer />
      <ThemedText style={{ fontSize: 18 }}>
        Time to start reading some books...
      </ThemedText>

      <Spacer height={20} />
      <ThemedButton onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}> Logout </Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  emailText: {
    color: "#fff",
  },
});
