import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/LoginScreen';
import ForgotPasswordScreen from '../src/screens/ForgotPasswordScreen';
import HomeScreen from '../src/screens/HomeScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import ProductDetailsScreen from '../src/screens/ProductDetailsScreen';  
import ProductListScreen from '../src/screens/ProductListScreen';
import ProfileScreen from '../src/screens/Profile/ProfleScreen';
import EditProfile from '../src/components/EditProfile';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      <Stack.Screen name='ProductListScreen' component={ProductListScreen} />
      <Stack.Screen name='ProductDetailsScreen' component={ProductDetailsScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
      <Stack.Screen name='EditProfile' component={EditProfile} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
