
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

import TaskItem from "../components/TaskItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TaskScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks((currentTasks) => [
        ...currentTasks,
        task.trim(),
      ]);
      setTask("");
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    setTasks((currentTasks) =>
      currentTasks.filter((_, i) => i !== index)
    );
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <Text style={styles.title}>Task Manager</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
          returnKeyType="done"
        />

        <Button
          title="Add Task"
          onPress={addTask}
        />

        <FlatList
          style={styles.list}
          data={tasks}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TaskItem
              task={item}
              onDelete={() => deleteTask(index)}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>
              No tasks yet. Add your first task!
            </Text>
          }
        />
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
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 16,
  },

  list: {
    marginTop: 15,
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "#777777",
  },
});
