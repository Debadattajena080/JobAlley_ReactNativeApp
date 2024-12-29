import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.iconWrapper}>
          <Icon name="person" size={65} color="#f0f0f0" />
        </View>

        <View>
          <Text style={styles.userName}>User Profile</Text>
          <Text style={styles.userEmail}>userprofile@example.com</Text>
        </View>
      </View>

      <View style={styles.navSection}>
        <DrawerItem
          label="Dashboard"
          onPress={() => props.navigation.navigate('Dashboard')}
          icon={({color, size}) => (
            <Icon name="dashboard" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Recommended jobs"
          onPress={() => props.navigation.navigate('EarlyAccess')}
          icon={({color, size}) => (
            <Icon name="work" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Saved jobs"
          onPress={() => props.navigation.navigate('TopCompanies')}
          icon={({color, size}) => (
            <Icon name="bookmark" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Profile performance"
          onPress={() => props.navigation.navigate('Profile performance')}
          icon={({color, size}) => (
            <Icon name="timeline" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
      </View>
      <View>
        <DrawerItem
          label="My services"
          onPress={() => props.navigation.navigate('Settings')}
          icon={({color, size}) => (
            <Icon name="person" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Write to us"
          onPress={() => props.navigation.navigate('Notifications')}
          icon={({color, size}) => (
            <Icon name="mail" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="About us"
          onPress={() => props.navigation.navigate('Notifications')}
          icon={({color, size}) => (
            <Icon name="info" size={size} color="#06b6d4" />
          )}
          labelStyle={styles.drawerItemLabel}
        />
      </View>

      <View style={styles.footerSection}>
        <TouchableOpacity
          style={styles.logoutButton}
          //   onPress={() => alert('Logout')}
        >
          <Icon name="logout" size={24} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.appVersion}>App Version 1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  userInfoSection: {
    padding: 20,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',

    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: '#f5f6fa',
    gap: 20,
  },
  iconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2F363F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  userEmail: {
    fontSize: 16,
  },
  navSection: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  drawerItemLabel: {
    fontSize: 16,
    fontWeight: '50',
  },
  footerSection: {
    marginTop: 'auto',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#06b6d4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  appVersion: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default CustomDrawerContent;
