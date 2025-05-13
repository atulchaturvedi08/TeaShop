import React, { useState, useEffect } from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';

const banners = [
  '600 * 200',
  '600 * 200',
  '600 * 200',
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
              backgroundColor: 'lightgray', // Gray color
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, color: 'black' }}>{banner}</Text>
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