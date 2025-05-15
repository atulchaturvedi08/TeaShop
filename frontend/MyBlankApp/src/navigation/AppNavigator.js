// navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../src/screens/Profile/ProfleScreen';
// import EditProfile from '../src/screens/Profile/EditProfile'; // Make sure file name is correct
import EditProfile from '../src/components/EditProfile';
import Support from '../src/components/Support'; // Ensure this path is correct
import GiftCardScreen from '../src/components/GiftCard';
import Notifications from '../src/components/Notifications';
import RatingsReviews from '../src/components/RatingsReviews'; // Ensure this path is correct


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
      <Stack.Screen
        name="Support"
        component={Support}
        options={{ title: 'Support' }}
      />
      <Stack.Screen
        name="GiftCard"
        component={GiftCardScreen}
        options={{ title: 'Gift Card' }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen
        name="RatingsReviews"
        component={RatingsReviews}
        options={{ title: 'Ratings & Reviews' }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
