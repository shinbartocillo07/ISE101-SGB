
import { useRouter, Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, Pressable } from 'react-native';

import { announcements } from '../../services/announcementData';

export default function AnnouncementsScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: 'Announcements' }} />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Campus Announcements</Text>
        <Text style={styles.description}>
          Select an announcement to view its details.
        </Text>

        {announcements.map((item) => (
          <Pressable
            key={item.id}
            style={styles.card}
            onPress={() =>
              router.push(`/announcements/${item.id}`)
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>
              Category: {item.category}
            </Text>
            <Text style={styles.status}>
              Status: {item.read ? 'Read' : 'Unread'}
            </Text>
            <Text style={styles.link}>View Details →</Text>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E8F0FE',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E3A5F',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE5F2',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A5F',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: '#3B5998',
    marginBottom: 12,
  },
  link: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563EB',
  },
});
