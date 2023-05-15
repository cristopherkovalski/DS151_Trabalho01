import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

const PIXABAY_API_KEY = '35480957-2bc054552db0f0a8996e5c71e';

const CountryImages = ({ route }) => {
  const { countryName } = route.params;
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(countryName)}&image_type=photo&per_page=`);
        setImages(response.data.hits);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages();
  }, [countryName]);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.webformatURL }} style={styles.image}  />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={4}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    image: {
      flex: 1,
      height: 200,
      width: 200,
      margin: 2,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  });

export default CountryImages;