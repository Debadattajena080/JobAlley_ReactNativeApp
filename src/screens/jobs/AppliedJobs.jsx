import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const AppliedJobs = () => {
  const jobs = [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Tech Solutions',
      recruiterActive: 'Today',
      additionalInfo: 'Application viewed 6d ago',
    },
    {
      id: '2',
      title: 'Backend Developer',
      company: 'Code Innovators',
      recruiterActive: '2 days ago',
      additionalInfo: 'Resume viewed',
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      company: 'Digital Factory',
      recruiterActive: '3 days ago',
      additionalInfo: 'Resume downloaded',
    },
    {
      id: '4',
      title: 'UI/UX Designer',
      company: 'Creative Minds',
      recruiterActive: '5 days ago',
      additionalInfo: 'Not shortlisted',
    },
    {
      id: '5',
      title: 'Data Scientist',
      company: 'AI Labs',
      recruiterActive: '1 week ago',
      additionalInfo: 'Resume viewed',
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      company: 'Cloudify',
      recruiterActive: '2 days ago',
      additionalInfo: 'Resume downloaded',
    },
    {
      id: '7',
      title: 'Product Manager',
      company: 'Innovative Creations',
      recruiterActive: 'Today',
      additionalInfo: 'Application viewed 3d ago',
    },
    {
      id: '8',
      title: 'Software Tester',
      company: 'BugFixers Inc.',
      recruiterActive: '6 days ago',
      additionalInfo: 'Resume viewed',
    },
    {
      id: '9',
      title: 'Marketing Analyst',
      company: 'MarketSphere',
      recruiterActive: 'Yesterday',
      additionalInfo: 'Not shortlisted',
    },
    {
      id: '10',
      title: 'Cloud Architect',
      company: 'SkyHigh Technologies',
      recruiterActive: '2 weeks ago',
      additionalInfo: 'Resume downloaded',
    },
    {
      id: '11',
      title: 'Mobile App Developer',
      company: 'Appsy Studio',
      recruiterActive: 'Today',
      additionalInfo: 'Application viewed 4d ago',
    },
    {
      id: '12',
      title: 'Cybersecurity Analyst',
      company: 'SecureTech',
      recruiterActive: '3 days ago',
      additionalInfo: 'Resume viewed',
    },
    {
      id: '13',
      title: 'Machine Learning Engineer',
      company: 'DeepTech AI',
      recruiterActive: '5 days ago',
      additionalInfo: 'Resume downloaded',
    },
    {
      id: '14',
      title: 'Business Analyst',
      company: 'BizPro Solutions',
      recruiterActive: 'Yesterday',
      additionalInfo: 'Not shortlisted',
    },
    {
      id: '15',
      title: 'Technical Writer',
      company: 'DocuFlow',
      recruiterActive: '1 week ago',
      additionalInfo: 'Application viewed 7d ago',
    },
  ];

  const renderJobCard = ({item}) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Icon
          name="briefcase-outline"
          size={20}
          color="#06b6d4"
          style={styles.icon}
        />
        <View style={styles.jobInfo}>
          <Text style={styles.jobTitle}>{item.title}</Text>
        </View>
      </View>
      <View style={styles.company_row}>
        <Icon
          name="business-outline"
          size={20}
          color="#06b6d4"
          style={styles.icon}
        />

        <Text style={styles.companyName}>{item.company}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Icon name="time-outline" size={20} color="#888" />
          <Text style={styles.detailText}>{item.recruiterActive}</Text>
        </View>
        <View style={styles.detailItem2}>
          <Icon
            name="checkmark-circle"
            size={20}
            color="#06b6d4"
          />
          <Text style={styles.detailText}>{item.additionalInfo}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* //Three horizetal sticky header */}

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginVertical: 10}}>
        <View style={styles.row}>
          <Text style={styles.headerTitle}>Recruiter Actions</Text>
          <Text style={styles.headerTitle}>Applies on JobHunt</Text>
          <Text style={styles.headerTitle}> Applies on External Site</Text>
        </View>
      </ScrollView>

      <FlatList
        data={jobs}
        renderItem={renderJobCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AppliedJobs;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  company_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  jobInfo: {
    flex: 1,
  },

  headerTitle: {
    fontSize: 16,
    marginRight: 15,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#06b6d4',
    borderWidth: 1,
  },

  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  companyName: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  detailItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: '#e0f7fa',
  },

  detailText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
});
