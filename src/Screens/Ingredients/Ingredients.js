/* eslint-disable prettier/prettier */
import React from 'react'
import {
    FlatList,
    ScrollView,
    Text,
    View,
    Image,
    TouchableHighlight
  } from 'react-native';
import styles from './styles';
import {connect} from 'react-redux'
export const Ingredients =({navigation,route,data})=> {
   const onPressRecipe = item => {
        navigation.navigate('Recipe', { item });
    };
    
    const  renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
            <View style={styles.container}>
              <Image style={styles.photo} source={{ uri: item.photo_url }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
            </View>
          </TouchableHighlight>
        </TouchableHighlight>
  );
  //Get Url
  const getIngredientUrl = (ingredientID) => {
    const ingredients = data.ingredients;
    let url;
    ingredients.map(data => {
      if (data.ingredientId == ingredientID) {
        url = data.photo_url;
      }
    });
    return url;
  }
  //Category by name 
  const getCategoryName = (categoryId) => {
    const categories = data.categories
    let name;
    categories.map(data => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  }
  //Recipes By Ingredient
  const getRecipesByIngredient = ( ingredientId ) => {
    const recipes = data.recipes;
    const recipesArray = [];
    recipes.map(data => {
      data.ingredients.map(index => {
        if (index[0] == ingredientId) {
          recipesArray.push(data);
        }
      });
    });
    return recipesArray;
  }
    
    
    const ingredientId = route.params.ingredient;
    const ingredientUrl = getIngredientUrl(ingredientId);
    const ingredientName = route.params.name;
    return (
        <ScrollView style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
        </View>
        <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={getRecipesByIngredient(ingredientId)}
            renderItem={renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
          />
        </View>
      </ScrollView>
    )
}
const mapStateToProps = ( state ) => ( {
  data: state.storeData
})
export default connect(mapStateToProps,null)(Ingredients)