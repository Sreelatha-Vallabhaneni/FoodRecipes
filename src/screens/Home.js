import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import RandomRecipeImage from '../components/RandomRecipeImage';
import PopularMeals from '../components/PopularMeals';

export default function Home() {
  const [categories, setCategories] = useState();
  
  const getCategories = async () => {
    try{
      const categoriesResponse = await axios.get('https://themealdb.com/api/json/v1/1/categories.php')
      console.log('CATEGORIES', categoriesResponse.data);
      if(categoriesResponse && categoriesResponse.data){
        setCategories(categoriesResponse.data.categories)
      }
    } catch(error){
      console.log('error: ', error.message)
    }
  }

  useEffect(() => {
    getCategories();
  }, [])

  return (
    <SafeAreaView className=" flex-1 bg-white">
      <ScrollView>
        <PopularMeals />
        <RandomRecipeImage />
      </ScrollView>
    </SafeAreaView>
  )
}