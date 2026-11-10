
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function TaskItem({ task, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {task.toUpperCase()}
      </Text>

      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#dcedc8",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  delete: {
    fontSize: 14,
    color: "red",
    marginLeft: 10,
  },
});
