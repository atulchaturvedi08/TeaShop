import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TapriCard = ({ tapri }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: tapri.image }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{tapri.name}</Text>
      <View style={styles.ratingContainer}>
        <Icon name="star" color="#FFD700" size={16} />
        <Text>{tapri.rating} ({tapri.reviews})</Text>
      </View>
      <Text style={styles.distance}>0.5 km away</Text>
    </View>
  </TouchableOpacity>
);

const styles = {
  card: {
    width: 200,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
};

export default TapriCard;