 // components/UnsplashImage.js
import React, { useEffect, useState } from 'react';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function UnsplashImage({ query, style }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const placeholder = require('./../../assets/images/plan-placeholder.jpeg');
  const UNSPLASH_ACCESS_KEY= process.env.EXPO_PUBLIC_UNSPLASH_ACCESS_KEY;


  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query, per_page: 1 },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
          },
        });

        const results = res.data.results;
        if (results && results.length > 0) {
          setImageUrl(results[0].urls.small);
        }
      } catch (err) {
        console.warn(`Failed to fetch Unsplash image for "${query}"`);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [query]);

  if (loading) return <ActivityIndicator size="small" />;

  return <Image style={style} source={imageUrl ? { uri: imageUrl } : placeholder} />;
}
