import { Text, View, StyleSheet } from 'react-native';

type StudentGreetingProps = {
  name: string;
};

export default function StudentGreeting({
  name,
}: StudentGreetingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Hello, {name}!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});