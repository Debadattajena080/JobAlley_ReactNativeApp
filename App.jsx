import 'react-native-gesture-handler';
import React from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Profile from './src/screens/profile/Profile';
import Footer from './src/screens/footer/Footer';
import BasedOnApply from './src/screens/jobs/BasedOnApply';
import EarlyAccess from './src/screens/earlyAccess/EarlyAccess';
import TopCompanies from './src/screens/topCompanies/TopCompanies';
import JobDetails from './src/screens/jobs/JobDetails';
import CustomDrawerContent from './src/navigations/CustomDrawer';
import CustomHeader from './src/navigations/CustomHeader';
import AICard from './src/screens/additionalCards/AICards';

function HomeScreen() {
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

const ICONS = {
  Home: 'home',
  Apply: 'work',
  NVites: 'event',
  Profile: 'person',
};

function getTabBarIcon(routeName, color, size) {
  const iconName = ICONS[routeName] || 'help';
  return <Icon name={iconName} size={size} color={color} />;
}

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
      <BottomTabs.Screen name="Apply" component={JobDetails} />
      <BottomTabs.Screen name="NVites" component={JobDetails} />
      <BottomTabs.Screen name="Profile" component={Profile} />
    </BottomTabs.Navigator>
  );
}

const DrawerTabs = createDrawerNavigator();
function DrawerNavigation() {
  return (
    <DrawerTabs.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: ({navigation}) => <CustomHeader navigation={navigation} />,
      }}
    >
      <DrawerTabs.Screen name="Dashboard" component={BottomTabNavigation} />
      <DrawerTabs.Screen name="EarlyAccess" component={EarlyAccess} />
      <DrawerTabs.Screen name="TopCompanies" component={TopCompanies} />
      <DrawerTabs.Screen name="Profile performance" component={TopCompanies} />
      <DrawerTabs.Screen name="My services" component={TopCompanies} />
      <DrawerTabs.Screen name="Write to us" component={EarlyAccess} />
      <DrawerTabs.Screen name="About us" component={TopCompanies} />
    </DrawerTabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
