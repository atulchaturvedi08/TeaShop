import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, Text, Image } from 'react-native';

const banners = [
  'https://cdn-icons-png.flaticon.com/512/415/415733.png', // Tea cup icon (Tea Shop)
  'https://cdn-icons-png.flaticon.com/512/1046/1046876.png',
  'https://cdn-icons-png.flaticon.com/512/616/616408.png',
  'https://cdn-icons-png.flaticon.com/512/135/135620.png',
  'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
];

const BannerAd = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentBannerIndex(index % banners.length); // Loop through banners
  };

  return (
    <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={{ width: screenWidth, height: 200 }}
      >
        {banners.concat(banners).map((banner, index) => (
          <View
            key={index}
            style={{
              width: screenWidth,
              height: 200,
              backgroundColor: 'lightgray',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: banner }}
              style={{ width: 180, height: 180, resizeMode: 'contain' }}
            />
          </View>
        ))}
      </ScrollView>
      {/* Dot Indicators */}
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: currentBannerIndex === index ? 'black' : 'lightgray',
              marginHorizontal: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default BannerAd;