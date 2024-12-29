import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AppliedJobDetails = ({route}) => {
  const job = route.params?.job;

  const milestones = [
    {id: 1, label: 'Application Submitted', completed: true},
    {id: 2, label: 'Under Review', completed: true},
    {id: 3, label: 'Interview Scheduled', completed: true},
    {id: 4, label: 'Offer Extended', completed: false},
  ];

  const similarJobs = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Innovators',
      experience: '2-4 years',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
      location: 'San Francisco, CA',
      jobType: 'Full-Time',
      salary: '$80k - $100k',
    },
    {
      id: '2',
      title: 'React Developer',
      company: 'Code Factory',
      experience: '1-3 years',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
      location: 'Remote',
      jobType: 'Part-Time',
      salary: '$60k - $90k',
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      company: 'Design Studio',
      experience: '3-5 years',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
      location: 'New York, NY',
      jobType: 'Contract',
      salary: '$70k - $95k',
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      company: 'BuildWorks',
      experience: '4-6 years',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
      location: 'Austin, TX',
      jobType: 'Full-Time',
      salary: '$100k - $120k',
    },
    {
      id: '5',
      title: 'Backend Developer',
      company: 'Server Systems',
      experience: '2-4 years',
      logo: 'https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png',
      location: 'Seattle, WA',
      jobType: 'Remote',
      salary: '$85k - $110k',
    },
  ];

  const renderMilestone = ({item, index}) => {
    const isLastMilestone = index === milestones.length - 1;

    return (
      <View style={styles.milestoneContainer}>
        <View style={styles.stepMarker}>
          {item.completed ? (
            <Icon name="checkmark-circle" size={24} color="#06b6d4" />
          ) : (
            <View style={styles.emptyCircle} />
          )}
          {!isLastMilestone && (
            <View
              style={[
                styles.verticalLine,
                {backgroundColor: item.completed ? '#06b6d4' : '#ddd'},
              ]}
            />
          )}
        </View>
        <Text style={styles.milestoneLabel}>{item.label}</Text>
      </View>
    );
  };

  const renderSimilarJob = ({item}) => (
    <TouchableOpacity style={styles.similarJobCard}>
      <View style={styles.jobDetails}>
        <View>
          <Image source={{uri: item.logo}} style={styles.jobLogo} />
          <Text style={styles.similarJobTitle}>{item.title}</Text>
          <Text style={styles.similarJobCompany}>{item.company}</Text>{' '}
        </View>
      </View>

      <View style={styles.jobInfo}>
        <View style={styles.experienceRow}>
          <Icon name="location-outline" size={16} color="#06b6d4" />
          <Text style={styles.similarJobExperience}>{item.location}</Text>
        </View>
        <View style={styles.experienceRow}>
          <Icon name="briefcase-outline" size={16} color="#06b6d4" />
          <Text style={styles.similarJobExperience}>{item.experience}</Text>
        </View>
        <View style={styles.experienceRow}>
          <Icon name="cash-outline" size={16} color="#06b6d4" />
          <Text style={styles.similarJobExperience}>{item.salary}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.role}>{job?.title || 'Job Role'}</Text>
        <Text style={styles.company}>{job?.company || 'Company Name'}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressHeader}>Application Progress</Text>
        <FlatList
          data={milestones}
          renderItem={renderMilestone}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.similarJobsContainer}>
        <Text style={styles.similarJobsHeader}>Similar Jobs</Text>
        <FlatList
          data={similarJobs}
          renderItem={renderSimilarJob}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default AppliedJobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  role: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 18,
    color: '#777',
    marginTop: 4,
  },
  progressContainer: {
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  progressHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
    color: '#333',
  },
  milestoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  stepMarker: {
    alignItems: 'center',
    marginRight: 12,
    position: 'relative',
  },
  emptyCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  verticalLine: {
    width: 2,
    height: 40,
    position: 'absolute',
    top: 26, // Adjusted to ensure it starts right below the marker
  },
  milestoneLabel: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  similarJobsContainer: {
    marginTop: 16,
    paddingVertical: 16,
    borderRadius: 10,
  },
  similarJobsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
    color: '#333',
  },
  similarJobCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 2,
  },
  jobLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },

  jobDetails: {
    flex: 1,
    flexDirection: 'row',
  },
  jobInfo: {
    flex: 1,
  },
  similarJobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  similarJobCompany: {
    fontSize: 14,
    color: '#777',
    marginVertical: 4,
  },
  experienceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  similarJobExperience: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
    fontWeight: 'semibold',
  },
});
