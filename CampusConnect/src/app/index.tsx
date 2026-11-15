
import { useEffect, useState, useRef, type ComponentRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { loadAnnouncements } from '../services/announcementApi';
import type { ApiAnnouncement } from '../services/announcementApi';

import type { Announcement } from '../types/announcement';
import { getUnreadAnnouncements } from '../services/announcementUtils';

import AnnouncementPanel from '../components/AnnouncementPanel';
import StudentGreeting from '../components/StudentGreeting';
import Counter from '../components/Counter';
import SectionHeading from '../components/SectionHeading';
import ActionButton from '../components/ActionButton';

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
  const { width } = useWindowDimensions();
  const [compact, setCompact] = useState(false);

  const scrollViewRef = useRef<ComponentRef<typeof ScrollView>>(null);

  const [announcementPosition, setAnnouncementPosition] = useState(0);

  const unreadAnnouncements =
    getUnreadAnnouncements(sampleAnnouncements);

  const studentName = formatStudentName('Shin', 'Bartocillo');

  const announcementTitles = sampleAnnouncements.map(
    item => item.title
  );

  const [apiAnnouncements, setApiAnnouncements] =
    useState<ApiAnnouncement[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Update compact layout after the initial render
  useEffect(() => {
    setCompact(width < 380);
  }, [width]);

  // Load API announcements
  useEffect(() => {
    async function fetchAnnouncements() {
      try {
        const data = await loadAnnouncements();
        setApiAnnouncements(data);
      } catch {
        setError('Unable to load announcements. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchAnnouncements();
  }, []);

  const handleExploreAnnouncements = () => {
    scrollViewRef.current?.scrollTo({
      y: announcementPosition,
      animated: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={[
          styles.content,
          compact && styles.compactContent,
        ]}
      >
        <SectionHeading />

        <Text style={styles.subtitle}>
          One campus. Connected students.
        </Text>

        <Text style={styles.description}>
          Welcome to the Week 4 project!
        </Text>

        <StudentGreeting name={studentName} />

        <ActionButton
          label="Explore Announcements"
          onPress={handleExploreAnnouncements}
        />

        <Text style={styles.description}>
          Announcement Titles: {announcementTitles.join(', ')}
        </Text>

        <View style={styles.announcementSection}>
          <Text style={styles.sectionTitle}>
            Week 2 Announcements
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

        <View
          onLayout={(event) =>
            setAnnouncementPosition(event.nativeEvent.layout.y)
          }
        >
          <AnnouncementPanel />
        </View>

        <Counter />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
  },
  content: {
    alignItems: 'center',
    padding: 24,
    paddingBottom: 40,
  },
  compactContent: {
    padding: 14,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3B5998',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 24,
  },
  announcementSection: {
    width: '100%',
    marginTop: 24,
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
