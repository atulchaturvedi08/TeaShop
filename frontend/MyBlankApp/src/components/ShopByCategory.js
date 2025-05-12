import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

// Order Again Products
const orderAgainProducts = [
  {
    id: '1',
    name: 'Cutting Chai - Desi Style',
    image: 'https://your-backend.com/images/chai.png',
    price: 10,
    originalPrice: 12,
    discount: '15% OFF',
    volume: '100 ml - Glass',
    delivery: '5 mins',
  },
  {
    id: '2',
    name: 'Parle-G Biscuits - Classic',
    image: 'https://your-backend.com/images/parle-g.png',
    price: 5,
    originalPrice: 5,
    discount: '40% OFF',
    volume: '65 g - Pack',
    delivery: '5 mins',
  },
  {
    id: '3',
    name: 'Parle-G Biscuits - Classic',
    image: 'https://your-backend.com/images/parle-g.png',
    price: 5,
    originalPrice: 5,
    discount: '90% OFF',
    volume: '65 g - Pack',
    delivery: '5 mins',
  },
  {
    id: '4',
    name: 'Parle-G Biscuits - Classic',
    image: 'https://your-backend.com/images/parle-g.png',
    price: 5,
    originalPrice: 5,
    discount: '60% OFF',
    volume: '65 g - Pack',
    delivery: '5 mins',
  },
];

// Shop by Category Products
const categoryProducts = [
  {
    id: '3',
    name: 'Kurkure Masala Munch',
    image: 'https://your-backend.com/images/kurkure.png',
    price: 10,
    originalPrice: 12,
    discount: '10% OFF',
    volume: '90 g - Pack',
    delivery: '5 mins',
  },
  {
    id: '4',
    name: 'Maggi Noodles - Masala',
    image: 'https://your-backend.com/images/maggi.png',
    price: 14,
    originalPrice: 15,
    discount: '5% OFF',
    volume: '70 g - Pack',
    delivery: '10 mins',
  },
  {
    id: '5',
    name: 'Lay’s Chips - Classic Salted',
    image: 'https://your-backend.com/images/lays.png',
    price: 20,
    originalPrice: 20,
    discount: '',
    volume: '52 g - Pack',
    delivery: '5 mins',
  },
  {
    id: '6',
    name: 'Bun Maska',
    image: 'https://your-backend.com/images/bunmaska.png',
    price: 15,
    originalPrice: 18,
    discount: '10% OFF',
    volume: '1 pc',
    delivery: '5 mins',
  },
];

// Recommended Products
const recommendedProducts = [
  {
    id: '7',
    name: 'Hot Samosa',
    image: 'https://your-backend.com/images/samosa.png',
    price: 12,
    originalPrice: 15,
    discount: '20% OFF',
    volume: '1 pc',
    delivery: '5 mins',
  },
  {
    id: '8',
    name: 'Cigarettes - Classic Milds',
    image: 'https://your-backend.com/images/cigarette.png',
    price: 150,
    originalPrice: 160,
    discount: '6% OFF',
    volume: '1 Pack - 10 sticks',
    delivery: '5 mins',
  },
];

const ProductCard = ({ item }) => (
  <View style={styles.productCard}>
    {item.discount ? (
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    ) : null}
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
    <View style={styles.priceRow}>
      <Text style={styles.price}>₹{item.price}</Text>
      {item.originalPrice !== item.price && (
        <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
      )}
    </View>
    <Text style={styles.volume}>{item.volume}</Text>
    <View style={styles.bottomRow}>
      <Text style={styles.deliveryTime}>⏱ {item.delivery}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={{ fontSize: 20, color: 'green' }}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function ShopByCategory() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Order Again Section */}
        <Text style={styles.sectionTitle}>Order Again</Text>
        <FlatList
          data={orderAgainProducts}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingLeft: 16, paddingVertical: 8 }}
        />

        {/* Shop by Category Section */}
        <Text style={styles.sectionTitle}>Shop by Category</Text>
        <FlatList
          data={categoryProducts}
          numColumns={2}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, marginTop: 15 }}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        />

        {/* Recommended for You Section */}
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <FlatList
          data={recommendedProducts}
          numColumns={2}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8, marginTop: 15 }}
          columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  productCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
    filter: 'grayscale(100%)', // Apply grayscale filter
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#D32F2F',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 1,
  },
  discountText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  originalPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 6,
  },
  volume: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    alignItems: 'center',
  },
  deliveryTime: {
    fontSize: 11,
    color: 'green',
  },
  addButton: {
    borderWidth: 1,
    borderColor: 'green',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
