import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Sample Job Data
const jobData = [
  {
    id: 1,
    title: 'Software Engineer',
    salary: '$80,000 - $100,000',
    experience: '2-5 years',
    location: 'San Francisco, CA',
    datePosted: '4 days ago',
    tags: ['Remote', 'Full-Time', 'Urgent'],
  },
  {
    id: 2,
    title: 'Product Manager',
    salary: '$90,000 - $120,000',
    experience: '3-7 years',
    location: 'New York, NY',
    datePosted: '5 days ago',
    tags: ['On-Site', 'Full-Time'],
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    salary: '$70,000 - $90,000',
    experience: '1-3 years',
    location: 'Los Angeles, CA',
    datePosted: '3 days ago',
    tags: ['Remote', 'Part-Time'],
  },
  {
    id: 4,
    title: 'Data Scientist',
    salary: '$100,000 - $130,000',
    experience: '3-5 years',
    location: 'Boston, MA',
    datePosted: '6 days ago',
    tags: ['Hybrid', 'Full-Time'],
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    salary: '$85,000 - $110,000',
    experience: '2-4 years',
    location: 'Austin, TX',
    datePosted: '7 days ago',
    tags: ['Remote', 'Full-Time'],
  },
];

export default function EarlyAccess() {
  const renderCard = item => (
    <View key={item.id} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="attach-money" size={20} color="#06b6d4" />
        <Text style={styles.infoText}>{item.salary}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="work" size={20} color="#06b6d4" />
        <Text style={styles.infoText}>{item.experience} experience</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="location-on" size={20} color="#06b6d4" />
        <Text style={styles.infoText}>{item.location}</Text>
      </View>

      <View style={styles.infoRow}>
        <Icon name="schedule" size={20} color="#06b6d4" />
        <Text style={styles.infoText}>Posted {item.datePosted}</Text>
      </View>

      <View style={styles.chips}>
        {item.tags.map((tag, index) => (
          <Text key={index} style={styles.chip}>
            {tag}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Early Access Jobs</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}>
        {jobData.map(renderCard)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    width: 250,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginVertical: 10,
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  chips: {
    flexDirection: 'row',
    marginTop: 5,
  },
  chip: {
    backgroundColor: '#e0f7fa',
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 40,
  },
});
