import { ScrollView, View, Image, Text } from 'react-native';
import React from 'react'

const HorizontalScrollView = ({ items }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='w-full py-5'>
        <View className='flex flex-row space-x-4'>
            {items.map((item, index) => (
                <View key={index} className='flex-shrink-0 w-52 bg-white rounded-xl shadow-md overflow-hidden'>
                    <Image source={{ uri: item.strMealThumb }} className='w-full h-48 object-cover rounded-xl' />
                    <View className='py-4'>
                        <Text className='text-lg font-semibold tracking-wider'>{item.strMeal}</Text>
                        <Text className='text-sm text-regularBrown tracking-wider'>{item.strArea}</Text>
                    </View>
                </View>
            ))}
        </View>
    </ScrollView>
  )
}

export default HorizontalScrollView