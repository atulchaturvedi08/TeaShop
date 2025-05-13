// screens/ProductDetailScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.desc}>{product.description}</Text>
        <Text style={styles.price}>₹{product.price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
            <Text style={styles.qtyBtn}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyText}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
            <Text style={styles.qtyBtn}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300, resizeMode: 'cover' },
  details: { padding: 16 },
  name: { fontSize: 24, fontWeight: 'bold' },
  desc: { fontSize: 16, color: '#666', marginVertical: 10 },
  price: { fontSize: 20, color: 'green', fontWeight: '600', marginBottom: 20 },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  qtyBtn: {
    fontSize: 20,
    padding: 10,
    backgroundColor: '#eee',
    marginHorizontal: 10,
  },
  qtyText: {
    fontSize: 18,
  },
  cartBtn: {
    backgroundColor: '#2E7D32',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
