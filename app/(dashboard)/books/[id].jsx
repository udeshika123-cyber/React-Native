import { StyleSheet } from "react-native";
// import ThemedCard from "../../components/ThemedCard";
// import ThemedButton from "../../components/ThemedButton";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";

const BooksDetails = () => {
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText>Book Details</ThemedText>
    </ThemedView>
  );
};

export default BooksDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
