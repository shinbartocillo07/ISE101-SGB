import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export type StudentCardProps = {
  name: string;
  program: string;
  yearLevel: string;
};

export default function StudentCard({ name, program, yearLevel }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Student Profile</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>Program: {program}</Text>
      <Text style={styles.detail}>Year Level: {yearLevel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#f4f8ff',
    borderColor: '#3b82f6',
    borderWidth: 2,
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  detail: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 4,
  },
});
