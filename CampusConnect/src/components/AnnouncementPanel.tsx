
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AnnouncementCard from './AnnouncementCard';

type AnnouncementItem = {
  id: string;
  title: string;
  category: string;
  read: boolean;
};

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([
    {
      id: 'ANN-001',
      title: 'Enrollment Reminder',
      category: 'Academic',
      read: false,
    },
    {
      id: 'ANN-002',
      title: 'Sports Festival Announcement',
      category: 'Events',
      read: false,
    },
    {
      id: 'ANN-003',
      title: 'Campus Clean-up Drive',
      category: 'Community',
      read: true,
    },
  ]);

  const unreadCount = announcements.filter(
    (announcement) => !announcement.read
  ).length;

  const totalCount = announcements.length;

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Campus Announcements
      </Text>

      <View style={styles.summary}>
        <Text style={styles.counter}>
          Total Announcements: {totalCount}
        </Text>

        <Text style={styles.counter}>
          Unread Announcements: {unreadCount}
        </Text>
      </View>

      <View>
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            course="BSIS"
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
    paddingHorizontal: 12,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    color: '#172B4D',
    marginBottom: 12,
  },
  summary: {
    backgroundColor: '#F1F5F9',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    gap: 8,
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
});
