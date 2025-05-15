import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const dummyData = [
  {
    id: '1',
    name: 'Amul Gold Milk, 500 ml',
    image: 'https://your-backend.com/images/amul.png',
    lastBought: '1 week ago',
    rating: 0,
  },
  {
    id: '2',
    name: 'Cleanzo White Phenyl, 2 L',
    image: 'https://your-backend.com/images/phenyl.png',
    lastBought: '2 weeks ago',
    rating: 0,
  },
  {
    id: '3',
    name: 'English Oven Premium White Bread, 700 g',
    image: 'https://your-backend.com/images/bread.png',
    lastBought: '2 weeks ago',
    rating: 0,
  },
  {
    id: '4',
    name: 'Madhur Sugar - Refined, 1 kg',
    image: 'https://your-backend.com/images/sugar.png',
    lastBought: '3 weeks ago',
    rating: 2,
  },
  {
    id: '5',
    name: 'Maaza Mango Drink - Original Flavour, Refreshing, 600 ml',
    image: 'https://your-backend.com/images/maaza.png',
    lastBought: '3 weeks ago',
    rating: 0,
  },
];

const RatingsReviews = () => {
  const [selectedTab, setSelectedTab] = useState('toBeReviewed');
  const [items, setItems] = useState(dummyData);
  const [modalVisible, setModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [currentItem, setCurrentItem] = useState(null);

  const updateRating = (itemId, newRating) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, rating: newRating } : item
    );
    setItems(updatedItems);
  };

  const renderStars = (item) => {
    return [...Array(5)].map((_, index) => (
      <TouchableOpacity key={index} onPress={() => updateRating(item.id, index + 1)}>
        <Icon
          name="star"
          size={20}
          color={index < item.rating ? '#FFA500' : '#ccc'}
          style={{ marginHorizontal: 2 }}
        />
      </TouchableOpacity>
    ));
  };

  const handleReviewPress = (item) => {
    setCurrentItem(item);
    setReviewText('');
    setModalVisible(true);
  };

  const handleSubmitReview = () => {
    // You can handle the review submission here (e.g., send to backend)
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastBought}>Last bought by you - {item.lastBought}</Text>
        <View style={styles.starsContainer}>{renderStars(item)}</View>
        {item.rating > 0 && (
          <TouchableOpacity style={styles.reviewButton} onPress={() => handleReviewPress(item)}>
            <Text style={styles.reviewButtonText}>Write a Review</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const filteredItems =
    selectedTab === 'toBeReviewed'
      ? items.filter(item => item.rating === 0 || item.rating < 5)
      : items.filter(item => item.rating > 0);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => setSelectedTab('toBeReviewed')} style={selectedTab === 'toBeReviewed' ? styles.activeTab : styles.tab}>
          <Text style={selectedTab === 'toBeReviewed' ? styles.activeTabText : styles.tabText}>To be reviewed ({items.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('reviewed')} style={selectedTab === 'reviewed' ? styles.activeTab : styles.tab}>
          <Text style={selectedTab === 'reviewed' ? styles.activeTabText : styles.tabText}>Reviewed (0)</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Review Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Write a Review</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your review"
              value={reviewText}
              onChangeText={setReviewText}
              multiline
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmitReview}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 20 },
  header: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  tabs: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc' },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { flex: 1, paddingVertical: 10, alignItems: 'center', borderBottomWidth: 3, borderColor: '#000' },
  tabText: { color: '#888' },
  activeTabText: { color: '#000', fontWeight: 'bold' },
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  image: { width: 50, height: 50, marginRight: 10, resizeMode: 'contain' },
  infoContainer: { flex: 1 },
  name: { fontWeight: '600', fontSize: 14 },
  lastBought: { color: '#666', fontSize: 12, marginVertical: 4 },
  starsContainer: { flexDirection: 'row', marginVertical: 4 },
  reviewButton: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  reviewButtonText: { fontSize: 13, fontWeight: '600' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'stretch',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    minHeight: 60,
    marginBottom: 16,
    fontSize: 15,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 4,
  },
});

export default RatingsReviews;
