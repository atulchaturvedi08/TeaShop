import React from 'react';
import { View, Text } from 'react-native';

const Header = () => (
  <View style={{ backgroundColor: '#7CC94C', padding: 16 }}>
    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff' }}>bigbasket</Text>
    <Text style={{ color: '#fff', marginTop: 4 }}>
      Deliver to <Text style={{ fontWeight: 'bold' }}>Home</Text>
    </Text>
    <Text style={{ color: '#fff', fontSize: 12 }}>shree Shyam Apartment second floor...</Text>
  </View>
);

export default Header;
