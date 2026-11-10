
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeMessage from "../components/WelcomeMessage";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <WelcomeMessage />

        <Text style={styles.text}>
          Welcome to your first screen!
        </Text>

        <Text style={styles.text}>
          This is built using JSX and components.
        </Text>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
