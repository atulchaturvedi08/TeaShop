import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Footer = () => {
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
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Icon name="home" size={24} />
        <Text style={{ fontSize: 10 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Icon name="category" size={24} />
        <Text style={{ fontSize: 10 }}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Icon name="shopping-cart" size={24} />
        <Text style={{ fontSize: 10 }}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: 'center' }}>
        <Icon name="person" size={24} /> {/* Fixed the icon name */}
        <Text style={{ fontSize: 10 }}>Win a Car</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
