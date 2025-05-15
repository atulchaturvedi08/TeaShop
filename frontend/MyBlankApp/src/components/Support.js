import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const faqs = [
  {
    title: 'Account Related',
    description: 'Profile, Mobile Number, Address and more.',
    icon: '👤',
    details: 'Here are more details about Account Related queries.',
    email: 'account@support.com',
    contact: '123-456-7890',
  },
  {
    title: 'Delivery Related',
    description: 'Tracking, Status, Delivery Charges and more.',
    icon: '📦',
    details: 'Here are more details about Delivery Related queries.',
    email: 'delivery@support.com',
    contact: '987-654-3210',
  },
  {
    title: 'Payment Related',
    description: 'Various types of payment, wallets and more.',
    icon: '💳',
    details: 'Here are more details about Payment Related queries.',
    email: 'payment@support.com',
    contact: '555-123-4567',
  },
  {
    title: 'Offer & Voucher Related',
    description: 'Voucher, Offers, Discounts and more.',
    icon: '🏷️',
    details: 'Here are more details about Offer & Voucher Related queries.',
    email: 'offers@support.com',
    contact: '444-222-1111',
  },
  {
    title: 'BB Wallet Related',
    description: 'Know all about the wallet related queries.',
    icon: '👛',
    details: 'Here are more details about BB Wallet Related queries.',
    email: 'wallet@support.com',
    contact: '333-888-9999',
  },
  {
    title: 'Tataneu Related',
    description: 'Know all about the Tataneu related queries.',
    icon: '📝',
    details: 'Here are more details about Tataneu Related queries.',
    email: 'tataneu@support.com',
    contact: '222-777-6666',
  },
];

const FAQsScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handlePress = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>FAQs</Text>
      {faqs.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Text style={styles.arrow}>
              {openIndex === index ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
          {openIndex === index && (
            <View style={styles.dropdown}>
              <Text style={styles.dropdownText}>{item.details}</Text>
              <Text style={styles.dropdownText}>Email: {item.email}</Text>
              <Text style={styles.dropdownText}>Contact: {item.contact}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20, // was 26
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 16, // was 20
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: 12, // was 16
    borderRadius: 10,
    marginBottom: 8,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20, // was 24
    marginRight: 12, // was 16
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15, // was 18
    fontWeight: '600',
    color: '#333',
  },
  description: {
    fontSize: 12, // was 14
    color: '#555',
    marginTop: 2, // was 4
  },
  arrow: {
    fontSize: 16, // was 18
    marginLeft: 6, // was 8
    color: '#888',
  },
  dropdown: {
    backgroundColor: '#e0f7fa',
    padding: 10, // was 12
    borderRadius: 8,
    marginBottom: 10, // was 12
    marginLeft: 32, // was 40
    marginRight: 6, // was 8
  },
  dropdownText: {
    fontSize: 13, // was 15
    color: '#222',
  },
});

export default FAQsScreen;
