import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import BasedOnProfile from './BasedOnProfile';

export default function BasedOnApply() {
  const jobData = [
    {
      id: 1,
      companyLogo: 'https://via.placeholder.com/50',
      companyName: 'Google',
      role: 'Software Engineer',
      rating: '4.5',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      companyLogo: 'https://via.placeholder.com/50',
      companyName: 'Apple',
      role: 'Product Manager',
      rating: '4.2',
      location: 'New York, NY',
    },
    {
      id: 3,
      companyLogo: 'https://via.placeholder.com/50',
      companyName: 'Microsoft',
      role: 'UI/UX Designer',
      rating: '4.8',
      location: 'Los Angeles, CA',
    },
    {
      id: 4,
      companyLogo: 'https://via.placeholder.com/50',
      companyName: 'Microsoft',
      role: 'UI/UX Designer',
      rating: '4.8',
      location: 'Los Angeles, CA',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Jobs based on your applies</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        {jobData.map(job => (
          <View key={job.id} style={styles.card}>
            <Image source={{uri: job.companyLogo}} style={styles.logo} />
            <View style={styles.cardDetails}>
              <View style={styles.companyContainer}>
                <Text style={styles.companyName}>{job.companyName}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.star}>⭐</Text>
                  <Text style={styles.ratingText}>{job.rating}</Text>
                </View>
              </View>
              <Text style={styles.role}>{job.role}</Text>
              <Text style={styles.location}>{job.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <BasedOnProfile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  companyContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  scrollContainer: {
    paddingHorizontal: 5,
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#FFF',
    width: 250,
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  cardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  role: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  star: {
    fontSize: 16,
    color: '#FFD700', // Gold star color
    marginRight: 3,
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
  },
  location: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
