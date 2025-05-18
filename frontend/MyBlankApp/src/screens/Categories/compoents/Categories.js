import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Categories = ({ categories, selectedCategory, onSelectCategory }) => (
  <View style={styles.container}>
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryItem,
            item.id === selectedCategory ? styles.selected : null,
          ]}
          onPress={() => onSelectCategory(item.id)}
        >
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  categoryItem: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#4caf50',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Categories;