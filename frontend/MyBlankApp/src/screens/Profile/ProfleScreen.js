// ✅ ProfleScreen.js (Corrected)

import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'; // ✅ ye missing tha



const ProfileScreen = () => {
  const navigation = useNavigation();

  const user = {
    name: 'Rahul Chaudhary',
    phone: '9760095759',
  };

  const quickActions = [
    { id: '1', title: 'Orders', icon: 'calendar-check' },
    { id: '2', title: 'BBWallet', icon: 'wallet' },
    { id: '3', title: 'Address', icon: 'map-marker' },
  ];

  const menuItems = [
    { id: '1', title: 'Save for later', icon: 'bookmark-outline' },
    { id: '2', title: 'Saved Payments', icon: 'credit-card-outline' },
    { id: '3', title: 'Ratings & Reviews', icon: 'star-outline' },
    { id: '4', title: 'NeuPass', icon: 'ticket-percent-outline' },
    { id: '5', title: 'Support', icon: 'lifebuoy' },
    { id: '6', title: 'My Gift Cards', icon: 'gift-outline' },
    { id: '7', title: 'Notifications', icon: 'bell-outline' },
  ];

  const promoItems = [
    { title: 'bbWellness', image: 'https://via.placeholder.com/80x80?text=Wellness' },
    { title: 'bbLifestyle', image: 'https://via.placeholder.com/80x80?text=Lifestyle' },
    { title: 'Donation', image: 'https://via.placeholder.com/80x80?text=Donate' },
    { title: 'Offers', image: 'https://via.placeholder.com/80x80?text=Offers' },
  ];

  const logoutButtonOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoutButtonOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', onPress: () => alert('Logged Out') },
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userPhone}>{user.phone}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="pencil-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {quickActions.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.quickActionItem}
            onPress={() => alert(item.title)}
          >
            <Icon name={item.icon} size={24} color="#444" />
            <Text style={styles.quickActionText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu List */}
      <View style={styles.menuList}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => alert(item.title)}
          >
            <Icon name={item.icon} size={22} color="#444" />
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Promotions */}
      <View style={styles.promoSection}>
        <Text style={styles.promoHeading}>Do more with Bigbasket</Text>
        <Text style={styles.promoSubText}>
          Wellness blogs, health tips, donations, and more
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {promoItems.map((item, index) => (
            <View key={index} style={styles.promoItem}>
              <Image source={{ uri: item.image }} style={styles.promoImage} />
              <Text style={styles.promoText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Logout Button */}
      <Animated.View style={[styles.logoutButtonContainer, { opacity: logoutButtonOpacity }]}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150x50?text=Logo' }}
          style={styles.logo}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  quickActionItem: {
    alignItems: 'center',
  },
  quickActionText: {
    marginTop: 5,
    fontSize: 13,
  },
  menuList: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 15,
    color: '#333',
  },
  promoSection: {
    padding: 20,
  },
  promoHeading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promoSubText: {
    fontSize: 13,
    color: '#666',
    marginVertical: 5,
  },
  promoItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  promoImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  promoText: {
    marginTop: 5,
    fontSize: 12,
  },
  logoutButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoContainer: {
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
