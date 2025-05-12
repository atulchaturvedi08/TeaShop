import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ searchText, setSearchText, isListening, startListening, stopListening }) => (
  <View style={{ margin: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, elevation: 3, padding: 8 }}>
    <Icon name="search" size={24} color="#666" />
    <TextInput
      placeholder="Search 20000+ products"
      style={{ marginLeft: 10, flex: 1 }}
      value={searchText}
      onChangeText={setSearchText}
    />
    <TouchableOpacity onPress={isListening ? stopListening : startListening}>
      <Icon name="mic" size={24} color={isListening ? 'red' : '#666'} />
    </TouchableOpacity>
  </View>
);

export default SearchBar;
