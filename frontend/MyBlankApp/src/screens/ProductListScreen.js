import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'iPhone 14', price: '₹70,000', description: 'Apple iPhone with A15 chip.' },
  { id: '2', name: 'Samsung Galaxy S22', price: '₹60,000', description: 'Samsung flagship phone with AMOLED display.' },
];

const ProductListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ProductDetails', { product: item })}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default ProductListScreen;
