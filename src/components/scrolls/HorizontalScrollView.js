import { ScrollView, View, Image, Text } from 'react-native';
import React from 'react'

const HorizontalScrollView = ({ items, categories }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className='w-full py-5'>
        <View className={`flex flex-row ${categories ? 'space-x-5' : 'space-x-4'}`}>
            {items.map((item, index) => (
                <View key={index} className={`flex-shrink-0 ${categories ? 'w-auto justify-center items-center' : 'w-52'} bg-white rounded-xl shadow-md overflow-hidden`}>
                    <Image source={{ uri: categories ? item.strCategoryThumb : item.strMealThumb }} className={`object-cover ${ categories ? ' bg-creamWhite w-24 h-24 rounded-full' : 'h-48 w-full rounded-xl'}`} />
                    <View className='py-4'>
                        <Text className={`${categories ? 'text-base' : ' text-lg'} font-semibold tracking-wider`}>{categories ? item.strCategory : item.strMeal}</Text>
                        {!categories && <Text className='text-sm text-regularBrown tracking-wider'>{item.strArea}</Text>}
                    </View>
                </View>
            ))}
        </View>
    </ScrollView>
  )
}

export default HorizontalScrollView