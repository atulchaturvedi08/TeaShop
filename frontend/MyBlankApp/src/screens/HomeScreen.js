import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Voice from '@react-native-voice/voice';

// import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TrendingBrands from '../components/TrendingBrands';
import BannerAd from '../components/BannerAd';
import Footer from '../components/Footer';
import ShopByCategory from '../components/ShopByCategory';

const brands = [
  { id: '1', name: 'Milk', logo: 'https://cdn-icons-png.flaticon.com/512/1046/1046876.png' },      // Milk
  { id: '2', name: 'Perfora', logo: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' },     // Toothbrush
  { id: '3', name: 'Tomato', logo: 'https://cdn-icons-png.flaticon.com/512/135/135620.png' },      // Tomato
  { id: '4', name: 'Boat', logo: 'https://cdn-icons-png.flaticon.com/512/616/616494.png' },        // Boat
  { id: '5', name: 'Tea', logo: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },         // Tea
  { id: '6', name: 'Poha', logo: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png' },      // Bowl
  { id: '7', name: 'Breakfast', logo: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png' }, // Breakfast
  { id: '8', name: 'Sigret', logo: 'https://cdn-icons-png.flaticon.com/512/2933/2933887.png' },    // Cigarette
  // ... other brands
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event) => {
    if (event.value && event.value.length > 0) {
      setSearchText(event.value[0]);
    }
    setIsListening(false);
  };

  const onSpeechError = (error) => {
    console.error('Speech Error:', error);
    setIsListening(false);
  };

  const startListening = async () => {
    try {
      setIsListening(true);
      await Voice.start('en-US');
    } catch (error) {
      console.error('Voice Start Error:', error);
      setIsListening(false);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.error('Voice Stop Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          isListening={isListening}
          startListening={startListening}
          stopListening={stopListening}
        />
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* <Header /> */}
        
        <BannerAd />
        <TrendingBrands brands={brands} />
        <ShopByCategory />
      </ScrollView>

      <View style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
        flexDirection: 'row', justifyContent: 'space-around',
        backgroundColor: '#fff', borderTopColor: '#ddd', borderTopWidth: 1
      }}>
        <Footer />
      </View>
    </View>
  );
}
