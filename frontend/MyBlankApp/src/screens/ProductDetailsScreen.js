import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 20, color: 'green', marginBottom: 10 },
  description: { fontSize: 16 },
});

export default ProductDetailsScreen;
