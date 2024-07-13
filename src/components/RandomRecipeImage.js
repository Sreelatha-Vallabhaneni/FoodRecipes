import React from 'react'
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import useFetch from '../hooks/useFetch';

function RandomRecipeImage() {
    const { data, loading, error } = useFetch('https://themealdb.com/api/json/v1/1/random.php');
    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
      }
  return (
    <View className="mx-4">
        <Text className='my-4 text-blackBrown text-3xl font-serif tracking-widest font-bold'>Inspiration</Text>
        {data && data.meals && (
            <View className="my-4">
                <Image source={{ uri: data.meals[0].strMealThumb }} alt='recipe image' width={'100%'} height={200} className="rounded-2xl" />
            </View>
        )}
        <View>
            <Text className="text-2xl text-blackBrown font-sans font-bold mt-2">Feeling adventurous?</Text>
            <View className="flex flex-row justify-between mt-3 mb-8 ">
                <Text className="text-lg text-regularBrown font-normal w-2/5">Try our random meal suggestion</Text>
                <TouchableOpacity className="bg-orange text-blackBrown w-1/2 font-bold flex justify-center items-center rounded-xl">
                    <Text className="text-base font-sans font-semibold">Get random meal</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default RandomRecipeImage