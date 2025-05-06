import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TapriCard, SearchBar, PromoCarousel } from '../../components';

const HomeScreen = () => {
  const nearbyTapris = []; // Fetch from API

  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <PromoCarousel />
      
      <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 15 }}>
        Nearby Tapris
      </Text>
      
      <FlatList
        horizontal
        data={nearbyTapris}
        renderItem={({ item }) => <TapriCard tapri={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;