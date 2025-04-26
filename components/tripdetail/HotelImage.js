 // components/HotelImage.js
import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const HotelImage = ({ hotelName }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const placeholder = require('./../../assets/images/hotel-placeholder.jpeg');
  const UNSPLASH_ACCESS_KEY= process.env.EXPO_PUBLIC_UNSPLASH_ACCESS_KEY;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: hotelName, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
          },
        });

        const results = res.data.results;
        if (results && results.length > 0) {
          setImageUrl(results[0].urls.small);
        }
      } catch (err) {
        console.log('Error fetching image:', err.message);
        
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [hotelName]);

  if (loading) {
    return <ActivityIndicator size="small" />;
  }

  return (
    <Image
      style={styles.image}
      source={imageUrl ? { uri: imageUrl } : placeholder}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
});

export default HotelImage;