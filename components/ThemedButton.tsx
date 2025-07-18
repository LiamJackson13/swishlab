import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";
function ThemedButton({ style = {}, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && { opacity: 0.5 }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
});

export default ThemedButton;
