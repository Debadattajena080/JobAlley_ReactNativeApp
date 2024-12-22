import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Profile() {
  return (
    <ScrollView
      horizontal={true}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}>
      {/* Card 1 */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.iconBorderWrapper}>
            <Icon name="person" size={65} color="#718093" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userText}>User Profile comes here</Text>
            <Text style={styles.userText2}>Updated 45 days ago</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>775</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userText}>Search Appearance</Text>
            <Text style={styles.userText2}>Last 60 days</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Card 3 */}
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>70</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.userText}>Recruiter Actions</Text>
            <Text style={styles.userText2}>Last 30 days</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Card 4</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: 'white',
    marginHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 10,
  },
  cardRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBorderWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#06b6d4', // Border color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 15,
    padding: 12,
    borderColor: '#06b6d4',
    borderWidth: 6,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  userText2: {
    fontSize: 12,
    marginBottom: 10,
    color: '#a8a39d',
  },
  button: {
    marginTop: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  numberContainer: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#06b6d4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  heading: {
    fontSize: 18,
    color: '#005bc5',
    textAlign: 'center',
  },
});
