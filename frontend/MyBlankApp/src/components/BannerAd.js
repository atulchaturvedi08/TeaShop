import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';

const banners = [
  'https://via.placeholder.com/600x400.png?text=Banner+1',
  'https://via.placeholder.com/600x400.png?text=Banner+2',
  'https://via.placeholder.com/600x400.png?text=Banner+3',
  'https://via.placeholder.com/600x400.png?text=Banner+4',
];

const placeholderImage = 'https://via.placeholder.com/600x400.png?text=Loading...'; // Temporary image URL

const BannerAd = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
      setIsImageLoaded(false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center', height: 150 }}>
      {!isImageLoaded && (
        <View style={{ position: 'absolute', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ marginTop: 10, color: '#666' }}>Loading...</Text>
        </View>
      )}
      <Image
        source={{ uri: banners[currentBannerIndex] }}
        style={{
          width: '90%',
          aspectRatio: 4 / 3, // Enforce 4:3 aspect ratio
          resizeMode: 'contain',
        }}
        onLoad={() => setIsImageLoaded(true)} // Set image loaded state
      />
    </View>
  );
};

export default BannerAd;