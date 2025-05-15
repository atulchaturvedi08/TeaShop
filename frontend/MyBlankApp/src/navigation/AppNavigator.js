// navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../src/screens/Profile/ProfleScreen';
// import EditProfile from '../src/screens/Profile/EditProfile'; // Make sure file name is correct
import EditProfile from '../src/components/EditProfile';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'My Profile' }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Edit Profile' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
