
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { announcements } from '../../services/announcementData';

export default function AnnouncementDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const announcement = announcements.find(
    (item) => item.id === id
  );

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: 'Announcement Not Found',
            headerBackVisible: false,
          }}
        />

        <Text style={styles.title}>Announcement Not Found</Text>
        <Text style={styles.message}>
          The announcement you are looking for does not exist.
        </Text>

        <Pressable
          style={styles.backButton}
          onPress={() => router.replace('/announcements')}
        >
          <Text style={styles.backButtonText}>Back to Announcements</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Announcement Details',
          headerBackVisible: false,
        }}
      />

      <Pressable
        style={styles.backButton}
        onPress={() => router.replace('/announcements')}
      >
        <Text style={styles.backButtonText}>
          ← Back to Announcements
        </Text>
      </Pressable>

      <Text style={styles.category}>{announcement.category}</Text>
      <Text style={styles.title}>{announcement.title}</Text>

      <Text style={styles.id}>
        Announcement ID: {announcement.id}
      </Text>

      <Text style={styles.status}>
        Status: {announcement.read ? 'Read' : 'Unread'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E3A5F',
    marginBottom: 12,
  },
  category: {
    fontSize: 14,
    color: '#3B5998',
    marginBottom: 8,
  },
  id: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 12,
  },
  status: {
    fontSize: 16,
    color: '#3B5998',
  },
  message: {
    fontSize: 16,
    color: '#555555',
  },
  backButton: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
