import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TrendingBrands = ({ brands }) => (
  <>
    <Text style={styles.heading}>TRENDING BRANDS</Text>
    <View style={styles.container}>
      {brands.map((brand) => (
        <View key={brand.id} style={styles.brandItem}>
          <View style={styles.brandLogoContainer}>
            <Image source={{ uri: brand.logo }} style={styles.brandLogo} />
          </View>
          <Text style={styles.brandName}>{brand.name}</Text>
        </View>
      ))}
    </View>
  </>
);

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  brandItem: {
    alignItems: 'center',
    margin: 12,
  },
  brandLogoContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD1DC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  brandName: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default TrendingBrands;
