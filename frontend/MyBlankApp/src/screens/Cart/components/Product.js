import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Product = ({ item, onRemove, onIncreaseQty, onDecreaseQty }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>₹{item.price.toFixed(2)}</Text>
      <View style={styles.qtyRow}>
        <TouchableOpacity style={styles.qtyBtn} onPress={() => onDecreaseQty(item.id)}>
          <Text style={styles.qtyBtnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity style={styles.qtyBtn} onPress={() => onIncreaseQty(item.id)}>
          <Text style={styles.qtyBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
      <Text style={styles.removeText}>Remove</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    marginBottom: 12,
    borderRadius: 8,
    padding: 10,
  },
  image: { width: 80, height: 80, borderRadius: 8, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  price: { fontSize: 16, color: '#888', marginVertical: 4 },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  qtyBtn: {
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  qtyBtnText: { fontSize: 18, fontWeight: 'bold' },
  quantity: { fontSize: 16, color: '#555', minWidth: 30, textAlign: 'center' },
  removeButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  removeText: { color: '#fff', fontWeight: 'bold' },
});

export default Product;