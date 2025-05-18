import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Footer from '../../components/Footer';
import Categories from './compoents/Categories';

const categories = [
  { id: '1', name: 'Technology' },
  { id: '2', name: 'Health' },
  { id: '3', name: 'Sports' },
  { id: '4', name: 'Business' },
  { id: '5', name: 'Fruits' },
  { id: '6', name: 'Vegetables' },
  { id: '7', name: 'Beverages' },
  { id: '8', name: 'Snacks' },
];

const products = [
  { id: '101', name: 'iPhone 15', categoryId: '1' },
  { id: '102', name: 'Samsung Galaxy S24', categoryId: '1' },
  { id: '103', name: 'Yoga Mat', categoryId: '2' },
  { id: '104', name: 'Vitamin C Tablets', categoryId: '2' },
  { id: '105', name: 'Football', categoryId: '3' },
  { id: '106', name: 'Cricket Bat', categoryId: '3' },
  { id: '107', name: 'Business Book', categoryId: '4' },
  { id: '108', name: 'Stock Market Guide', categoryId: '4' },
  { id: '109', name: 'Apple', categoryId: '5' },
  { id: '110', name: 'Banana', categoryId: '5' },
  { id: '111', name: 'Carrot', categoryId: '6' },
  { id: '112', name: 'Broccoli', categoryId: '6' },
  { id: '113', name: 'Coke', categoryId: '7' },
  { id: '114', name: 'Orange Juice', categoryId: '7' },
  { id: '115', name: 'Chips', categoryId: '8' },
  { id: '116', name: 'Cookies', categoryId: '8' },
];

const CategoriesScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const filteredProducts = products.filter(
    product => product.categoryId === selectedCategory
  );

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productItem: {
    padding: 16,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0, height: 60,
    flexDirection: 'row', justifyContent: 'space-around',
    backgroundColor: '#fff', borderTopColor: '#ddd', borderTopWidth: 1,
  },
});

export default CategoriesScreen;