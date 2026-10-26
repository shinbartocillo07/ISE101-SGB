import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import StudentCard from './components/StudentCard';

const studentProfiles = [
  {
    name: 'Alex Santos',
    program: 'BS Information Systems',
    yearLevel: '2nd Year',
  },
  {
    name: 'Maria Cruz',
    program: 'BS Computer Science',
    yearLevel: '3rd Year',
  },
];

export default function App() {
  const [views, setViews] = useState(0);
  const [showTip, setShowTip] = useState(false);
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    console.log('Profile screen mounted');

    return () => {
      console.log('Profile screen cleanup');
    };
  }, []);

  const currentProfile = studentProfiles[profileIndex];

  const cycleProfile = () => {
    setProfileIndex((current) => (current + 1) % studentProfiles.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <StudentCard
        name={currentProfile.name}
        program={currentProfile.program}
        yearLevel={currentProfile.yearLevel}
      />

      <Text style={styles.viewCount}>Profile views: {views}</Text>

      <Button title="View Profile" onPress={() => setViews((current) => current + 1)} />
      <View style={styles.spacer} />
      <Button title="Reset Views" onPress={() => setViews(0)} />
      <View style={styles.spacer} />
      <Button
        title={showTip ? 'Hide Learning Tip' : 'Show Learning Tip'}
        onPress={() => setShowTip((current) => !current)}
      />
      <View style={styles.spacer} />
      <Button title="Change Student" onPress={cycleProfile} />

      {showTip ? (
        <View style={styles.tipBox}>
          <Text style={styles.tipTitle}>Learning Tip</Text>
          <Text style={styles.tipText}>
            Review your notes after each class so new ideas stay connected and easier to remember.
          </Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef4ff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 18,
    textAlign: 'center',
  },
  viewCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 16,
    textAlign: 'center',
  },
  spacer: {
    height: 12,
  },
  tipBox: {
    marginTop: 18,
    backgroundColor: '#fff7ed',
    borderColor: '#f59e0b',
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9a5b00',
    marginBottom: 6,
  },
  tipText: {
    fontSize: 15,
    color: '#7c2d12',
    lineHeight: 22,
  },
});
