import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawer';
import CustomHeader from './CustomHeader';
import BottomTabNavigation from './BottomTabNavigation';
import EarlyAccess from '../screens/earlyAccess/EarlyAccess';
import TopCompanies from '../screens/topCompanies/TopCompanies';
import StackNavigation from './StackNavigation';

const DrawerTabs = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <DrawerTabs.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: ({navigation}) => <CustomHeader navigation={navigation} />,
      }}>
      <DrawerTabs.Screen name="Dashboard" component={BottomTabNavigation} />
      <DrawerTabs.Screen name="AppliedJobDetails" component={StackNavigation} />
      <DrawerTabs.Screen name="EarlyAccess" component={EarlyAccess} />
      <DrawerTabs.Screen name="TopCompanies" component={TopCompanies} />
      <DrawerTabs.Screen name="Profile performance" component={TopCompanies} />
      <DrawerTabs.Screen name="My Services" component={TopCompanies} />
      <DrawerTabs.Screen name="Write to Us" component={EarlyAccess} />
      <DrawerTabs.Screen name="About Us" component={TopCompanies} />
    </DrawerTabs.Navigator>
  );
}

export default DrawerNavigation;
