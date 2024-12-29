import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Screens
import Profile from '../screens/profile/Profile';
import BasedOnApply from '../screens/jobs/BasedOnApply';
import AICard from '../screens/additionalCards/AICards';
import TopCompanies from '../screens/topCompanies/TopCompanies';
import EarlyAccess from '../screens/earlyAccess/EarlyAccess';
import Footer from '../screens/footer/Footer';
import AppliedJobs from '../screens/jobs/AppliedJobs';
import ProfileDetails from '../screens/profile/ProfileDetails';
import onDisplayNotification from '../utility/DisplayNotifications';

// Home Screen Component
function HomeScreen() {
  useEffect(() => {
    const interval = setInterval(() => {
      onDisplayNotification();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Profile />
        <BasedOnApply />
        <AICard />
        <TopCompanies />
        <EarlyAccess />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

// Icons Mapping
const ICONS = {
  Home: 'home',
  Apply: 'work',
  NVites: 'event',
  Profile: 'person',
};

// Get TabBar Icon
function getTabBarIcon(routeName, color, size) {
  const iconName = ICONS[routeName] || 'help';
  return <Icon name={iconName} size={size} color={color} />;
}

// Bottom Tab Navigator
const BottomTabs = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 6,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Montserrat-Medium',
          color: '#333',
          marginBottom: 20,
          paddingBottom: 4,
          fontWeight: '700',
        },
        tabBarIcon: ({color, size}) => getTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: '#06b6d4',
        tabBarInactiveTintColor: '#2F363F',
      })}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="Apply" component={AppliedJobs} />
      <BottomTabs.Screen name="NVites" component={AppliedJobs} />
      <BottomTabs.Screen name="Profile" component={ProfileDetails} />
    </BottomTabs.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BottomTabNavigation;
