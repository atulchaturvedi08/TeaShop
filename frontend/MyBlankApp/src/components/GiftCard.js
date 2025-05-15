import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';

const GiftCardScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [pin, setPin] = useState('');

  const handleRedeem = () => {
    const alphanumericRegex = /^[A-Za-z0-9]+$/;
    if (!cardNumber || !pin) {
      Alert.alert('Error', 'Please enter both Card Number and PIN');
      return;
    }
    if (
      cardNumber.length < 16 ||
      pin.length < 16 ||
      !alphanumericRegex.test(cardNumber) ||
      !alphanumericRegex.test(pin)
    ) {
      Alert.alert(
        'Error',
        'Card Number and PIN must be at least 16 characters and contain only letters (A-Z, a-z) and numbers (0-9)'
      );
      return;
    }
    Alert.alert('Redeem', `Card Number: ${cardNumber}\nPIN: ${pin}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>TeaShop</Text>
      <Text style={styles.subHeader}>Active Cards</Text>

      {/* Buy Gift Cards button removed */}

      <Text style={styles.redeemTitle}>Redeem Gift Card </Text>

      <TextInput
        style={styles.input}
        placeholder="Your Gift Card Number* (e.g. 1234ABCD5678EFGH)" // <-- placeholder with dummy number
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Gift Card PIN* (e.g. 8765ZYXW4321QWER)" // <-- placeholder with dummy pin
        value={pin}
        onChangeText={setPin}
        secureTextEntry
      />

      <TouchableOpacity style={styles.redeemButton} onPress={handleRedeem}>
        <Text style={styles.redeemButtonText}>REDEEM</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff', // same as Support.js
    flexGrow: 1,
  },
  header: {
    fontSize: 20, // same as Support.js
    fontWeight: 'bold',
    color: '#2a9d8f', // same as Support.js
    marginBottom: 16,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#e0f7fa', // similar to Support.js dropdown bg
    paddingBottom: 5,
    color: '#333',
  },
  redeemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2a9d8f', // match Support.js header color
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#a1887f',
    marginBottom: 16,
    fontSize: 13,
    paddingVertical: 6,
    color: '#333',
  },
  redeemButton: {
    backgroundColor: '#2a9d8f', // match Support.js header color
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  redeemButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default GiftCardScreen;
