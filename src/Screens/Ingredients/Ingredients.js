/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react'
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
import rest_config from '../../../rest_config'
export const Ingredients =({navigation,route,data})=> {
  const [sameIn, setSameIn] = useState([])
   const onPressRecipe = item => {
        navigation.navigate('Recipe', { item });
    };
    
    const  renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
            <View style={styles.container}>
              <Image style={styles.photo} source={{ uri: item.image }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.category}></Text>
            </View>
          </TouchableHighlight>
        </TouchableHighlight>
  );
  
  //Recipes By Ingredient
  const getRecipesByIngredient = ( ingredientName ) => {
    let data =[]
    const config = {
      headers: {
        "x-rapidapi-host": rest_config.API_HOST,
        "x-rapidapi-key": rest_config.API_KEY
      }
    }
    fetch( `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=${ingredientName}` , config)
      .then( res => res.json() )
      .then( res => setSameIn(res) )
      .catch( err => console.log( err ) )
    
      return data
  }
 
  
  const ingredientName = route.params.name;
  const image = route.params.image;
  useEffect( () => {
    getRecipesByIngredient(ingredientName)
  })
    
    
    
    return (
        <ScrollView style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${image}` }} />
        </View>
        <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={sameIn}
            renderItem={renderRecipes}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </ScrollView>
    )
}
const mapStateToProps = ( state ) => ( {
  data: state.storeData
})
export default connect(mapStateToProps,null)(Ingredients)