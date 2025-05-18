import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Add this import

const Footer = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('HomeScreen')}>
        <Icon name="home" size={24} />
        <Text style={{ fontSize: 10 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('CategoriesScreen')}>
        <Icon name="category" size={24} />
        <Text style={{ fontSize: 10 }}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('CartScreen')}>
        <Icon name="shopping-cart" size={24} />
        <Text style={{ fontSize: 10 }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('ProfileScreen')}>
        <Icon name="person" size={24} />
        <Text style={{ fontSize: 10 }}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
