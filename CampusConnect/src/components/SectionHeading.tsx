
import { StyleSheet, Text, View } from 'react-native';

export default function SectionHeading() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>
        Campus updates in one place
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 20,
    gap: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 15,
    color: '#526070',
  },
});
