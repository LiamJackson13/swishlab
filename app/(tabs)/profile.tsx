import React from "react";
import { StyleSheet, Text } from "react-native";
import ThemedButton from "../../components/ThemedButton";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";

const ProfileScreen = () => {
  const { logout, user } = useUser();

  return (
    <ThemedView style={styles.container} safe>
      <ThemedText title style={styles.heading}>
        Profile Screen
      </ThemedText>
      <ThemedText>{user.email}</ThemedText>
      <ThemedButton onPress={() => logout()}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
