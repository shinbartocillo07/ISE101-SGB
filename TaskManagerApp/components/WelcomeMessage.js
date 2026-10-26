
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Hello, Shin!
      </Text>

      <Text style={styles.section}>
        BSIS Section 3A
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
  },
  section: {
    fontSize: 16,
    color: "#555555",
    marginTop: 5,
  },
});
