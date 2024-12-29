import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CustomHeader({navigation}) {
  return (
    <View style={styles.headerContainer}>
      {/* Drawer Menu Icon */}
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.iconWrapper}>
        <Icon name="menu" size={28} color="#333" />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#666"
        />
      </View>

      {/* Notifications Icon */}
      <TouchableOpacity style={styles.iconWrapper}>
        <Icon name="notifications" size={28} color="#333" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f6fa',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  iconWrapper: {
    padding: 5,
  },
  searchWrapper: {
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
