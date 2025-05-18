import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Product from './components/Product';
import Footer from '../../components/Footer';


// Dummy cart data for demonstration
const initialCartItems = [
  {
    id: '1',
    name: 'Mikle & Ike',
    price: 29.99,
    quantity: 2,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '2',
    name: 'Breakfast Cereal',
    price: 49.99,
    quantity: 1,
    image: 'https://via.placeholder.com/80',
  },
];

const CartScreen = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const navigation = useNavigation();

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleIncreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQty = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotal = () => {
    return cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const renderItem = ({ item }) => (
    <Product
      item={item}
      onRemove={handleRemove}
      onIncreaseQty={handleIncreaseQty}
      onDecreaseQty={handleDecreaseQty}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Text style={{ marginBottom: 20 }}>Cart is empty</Text>
            <TouchableOpacity
              style={styles.addMoreButton}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.addMoreText}>Add More Products</Text>
            </TouchableOpacity>
          </View>
        }
      />
      {cartItems.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>₹{getTotal()}</Text>
          <TouchableOpacity style={styles.checkoutButton} disabled={cartItems.length === 0}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
            <View style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        flexDirection: 'row', justifyContent: 'space-around',
        backgroundColor: '#fff', borderTopColor: '#ddd', borderTopWidth: 1
      }}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', margin: 16 }, // chota
  list: { paddingHorizontal: 12 },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalLabel: { fontSize: 16, fontWeight: 'bold' }, // chota
  totalValue: { fontSize: 16, fontWeight: 'bold', color: '#333' }, // chota
  checkoutButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    marginLeft: 8,
    opacity: 1,
  },
  checkoutText: { color: '#fff', fontSize: 14, fontWeight: 'bold' }, // chota
  addMoreButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  addMoreText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CartScreen;