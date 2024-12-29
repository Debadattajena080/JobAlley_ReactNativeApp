import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import AppliedJobDtails from '../screens/jobs/AppliedJobDetails';

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Applied Job Details"
        component={AppliedJobDtails}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}
