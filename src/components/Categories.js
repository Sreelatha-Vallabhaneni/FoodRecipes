import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../hooks/useFetch';
import HorizontalScrollView from './scrolls/HorizontalScrollView';

const Categories = () => {
    const { data, loading, error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
        <View className="ml-4">
            <Text className="font-serif font-bold tracking-widest text-2.5xl text-blackBrown my-4">Categories</Text>
            <HorizontalScrollView items={data.categories} categories />
        </View>
    )
}

export default Categories