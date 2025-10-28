import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, ActivityIndicator, } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import ExpandableText from '../components/ExpandMoreAndLess';

const RecipeScreen = ({route}) => {
    const navigation = useNavigation();
    const { recipeId } = route.params;
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipe = async () => {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
            setRecipe(response.data.meals[0]);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
        };

        fetchRecipe();
    }, [recipeId]);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }
  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="m-4 flex flex-row items-center relative">
            <TouchableOpacity 
                className="w-10 z-10"
                onPress={() => navigation.navigate('Home')}
                >
                <ArrowLeftIcon width={25} height={25} color={"#1C120D"} />
            </TouchableOpacity>
            <View className="absolute w-full">
                <Text className="text-base font-sans font-semibold text-center" >Recipe</Text>
            </View>
        </View>
        <ScrollView>
            <View className="my-4">
                <Image source={{ uri: recipe.strMealThumb }} alt='recipe image' width={'100%'} height={250} className="" />
            </View>
            <View className="mx-4">
                <Text className="text-xl font-sans tracking-wider font-semibold">{recipe.strMeal}</Text>
                <View className="my-4">
                    {/* <ExpandableText text={recipe.strInstructions} /> */}
                    <Text>{recipe.strInstructions}</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RecipeScreen