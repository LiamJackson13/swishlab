import React from "react";
import { StyleSheet } from "react-native";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";

const TrainingScreen = () => {
  return (
    <ThemedView style={styles.container} safe>
      <ThemedText>TrainingScreen</ThemedText>
    </ThemedView>
  );
};

export default TrainingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
