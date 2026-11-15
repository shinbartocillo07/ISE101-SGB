
import { StyleSheet, Text, View, Pressable } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  course: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  course,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.details}>
        <Text style={styles.category}>
          Category: {category}
        </Text>

        <Text style={styles.category}>
          Course: {course}
        </Text>
      </View>

      <Text style={styles.status}>
        Status: {read ? 'Read' : 'Unread'}
      </Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={read ? 'Mark as unread' : 'Mark as read'}
        onPress={onMarkRead}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>
          {read ? 'Mark as Unread' : 'Mark as Read'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    gap: 10,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172B4D',
  },
  details: {
    gap: 5,
  },
  category: {
    fontSize: 14,
    color: '#526070',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#174A7E',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.75,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
