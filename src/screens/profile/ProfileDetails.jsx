import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBorderWrapper}>
        <Icon name="person" size={65} color="#718093" />
      </View>
      <View style={styles.header}>
        <Text style={styles.name}>User FullName</Text>
        <Text style={styles.username}>userprofile@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  iconBorderWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#06b6d4',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    marginBottom: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    marginTop: 5,
    color: 'gray',
  },
});

export default ProfileDetails;
