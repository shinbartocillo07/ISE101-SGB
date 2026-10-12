
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, I'm Shin!
      </Text>

      <Text style={styles.subtitle}>
        Welcome to React Native
      </Text>

      <Text style={styles.section}>
        BSIS 1A
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbeafe",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#2563eb",
    marginBottom: 15,
  },

  section: {
    fontSize: 16,
    color: "#333333",
    padding: 10,
    marginTop: 5,
  },
});
