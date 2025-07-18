import React from "react";
import { StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const HomeScreen = () => {
  return (
    <ThemedView style={styles.container} safe>
      <ThemedText>HomeScreen</ThemedText>
    </ThemedView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
