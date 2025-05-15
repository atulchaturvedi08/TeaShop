import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const initialNotifications = [
  {
    id: '1',
    title: 'Order Shipped',
    message: 'Your order #1234 has been shipped.',
    icon: 'truck-check',
    time: '2 hrs ago',
  },
  {
    id: '2',
    title: 'New Offer',
    message: 'Flat 20% off on your next order!',
    icon: 'sale',
    time: '5 hrs ago',
  },
  {
    id: '3',
    title: 'Wallet Updated',
    message: '₹100 has been added to your wallet.',
    icon: 'wallet',
    time: '1 day ago',
  },
  {
    id: '4',
    title: 'Payment Successful',
    message: 'Your payment of ₹499 was successful.',
    icon: 'credit-card-check',
    time: '2 days ago',
  },
];

const NotificationsScreen = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleNotificationPress = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClearNotifications = () => {
    setNotifications([]);
    setOpenIndex(null);
  };

  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity
        style={styles.notificationCard}
        onPress={() => handleNotificationPress(index)}
      >
        <Icon name={item.icon} size={30} color="#007aff" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.arrow}>
          {openIndex === index ? '▼' : '▶'}
        </Text>
      </TouchableOpacity>
      {openIndex === index && (
        <View style={styles.dropdown}>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {notifications.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No notifications</Text>
        </View>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={handleClearNotifications}
      >
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
    marginTop: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
  time: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  arrow: {
    fontSize: 18,
    marginLeft: 8,
    color: '#888',
  },
  dropdown: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 32,
    marginRight: 6,
  },
  separator: {
    height: 15,
  },
  clearButton: {
    position: 'absolute',
    right: 20, // moved to right side
    bottom: 20,
    backgroundColor: 'lightgray', // changed background color
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    elevation: 2,
  },
  clearButtonText: {
    color: '#333', // changed text color for contrast
    fontWeight: 'bold',
    fontSize: 15,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
    marginTop: 40,
  },
});

export default NotificationsScreen;
