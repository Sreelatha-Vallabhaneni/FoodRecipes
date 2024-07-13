import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch';
import HorizontalScrollView from './scrolls/HorizontalScrollView';

export default function PopularMeals() {
    const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    console.log('POPULAR M***', data);
  return (
    <View className="ml-4">
        <Text className="font-serif font-bold tracking-widest text-2.5xl text-blackBrown my-4">Popular This Week</Text>
        <HorizontalScrollView items={data.meals} />
    </View>
  )
}