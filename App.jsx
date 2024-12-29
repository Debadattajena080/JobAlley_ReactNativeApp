import 'react-native-gesture-handler';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  const [showDrawer, setShowDrawer] = useState(true);
  return (
    <NavigationContainer>
      {showDrawer ? (
        <DrawerNavigation />
      ) : (
        <StackNavigation setShowDrawer={setShowDrawer} />
      )}
    </NavigationContainer>
  );
}
