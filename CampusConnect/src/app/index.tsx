
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { loadAnnouncements } from '../services/announcementApi';
import type { ApiAnnouncement } from '../services/announcementApi';

import type { Announcement } from '../types/announcement';
import { getUnreadAnnouncements } from '../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
];

function formatStudentName(
  firstName: string,
  lastName: string
): string {
  return `${firstName} ${lastName}`;
}

export default function HomeScreen() {
  const unreadAnnouncements =
    getUnreadAnnouncements(sampleAnnouncements);
  
  const studentName = formatStudentName('Shin', 'Bartocillo');
  const announcementTitles = sampleAnnouncements.map(
  item => item.title
);
  const [apiAnnouncements, setApiAnnouncements] = useState<ApiAnnouncement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const data = await loadAnnouncements();
        setApiAnnouncements(data);
      } catch (err) {
        setError('Unable to load announcements. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text style={styles.subtitle}>
          One campus. Connected students.
        </Text>

        <Text style={styles.description}>
          Welcome to the Week 2 project!
        </Text>

        <Text style={styles.description}>
          Student Name: {studentName}
        </Text>

        <Text style={styles.description}>
          Announcement Titles: {announcementTitles.join(', ')}
        </Text>

        <View style={styles.announcementSection}>
          <Text style={styles.sectionTitle}>
            Announcements
          </Text>

          <Text style={styles.unreadCount}>
            Unread announcements: {unreadAnnouncements.length}
          </Text>

          {sampleAnnouncements.map((item) => (
            <View key={item.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>
                {item.title}
              </Text>

              <Text style={styles.category}>
                Category: {item.category}
              </Text>

              <Text style={styles.status}>
                Status: {item.read ? 'Read' : 'Unread'}
              </Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>
            API Announcements
          </Text>

          {loading && <Text>Loading announcements...</Text>}

          {error && <Text>{error}</Text>}

          {!loading && !error && apiAnnouncements.map((item) => (
            <View key={item.id} style={styles.announcementCard}>
              <Text style={styles.announcementTitle}>
                {item.title}
              </Text>

              <Text style={styles.category}>
                API Announcement
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1E3A5F',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B5998',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 24,
  },
  announcementSection: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E3A5F',
    marginBottom: 8,
  },
  unreadCount: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3B5998',
    marginBottom: 12,
  },
  announcementCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E3A5F',
  },
  category: {
    fontSize: 14,
    color: '#555555',
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    color: '#3B5998',
    marginTop: 5,
  },
});
