import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedView from "../components/ThemedView";
const index = () => {
  return (
    <ThemedView style={styles.container} safe>
      <ThemedText>index</ThemedText>
      <Spacer />
      <Link href="/login">
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register">
        <ThemedText>Register</ThemedText>
      </Link>
      <Link href="/home">
        <ThemedText>Home</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
