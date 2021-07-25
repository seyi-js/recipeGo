/* eslint-disable prettier/prettier */
import React,{useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import ViewIngredientsButton from '../../component/ViewIngredient/ViewIngredient';
import {connect} from 'react-redux'
import rest_config from '../../../rest_config'
import categories from '../../Data/categories.json'

export  const Recipe=({navigation,route})=> {
  const [item, setItem]=useState({})

  

  useEffect( () => {
    const item = route.params.item;
    setItem(item)

    const id = item.id
   /* const config = {
      headers: {
        "x-rapidapi-host": rest_config.API_HOST,
        "x-rapidapi-key": rest_config.API_KEY
      }
    }
    fetch( `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, config )
      .then( res => res.json() )
      .then( res => setItem( res ) )
      .catch ( err=> console.log( err ))
*/

      return ()=>{
        console.log('')
      }
    
  },[route.params.item]);
    
    
    
    const category = categories.find( category => category.id == item.categoryId) ? categories.find(category => category.id == item.categoryId) : 'null'
    const title = item.title;
   

    
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
          <Image style={styles.image}  source={{ uri: item.photo_url }}  />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() => navigation.navigate('RecipeList', { category, title })}
            >
              <Text style={styles.category}>{category.name}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image style={styles.infoPhoto} source={require('../../../assets/icons/time.png')} />
            <Text style={styles.infoRecipe}>{item.time} minutes </Text>
          </View>

          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              onPress={() => {
                let ingredients = item.ingredients;
                let titles = 'Ingredients for ' + title;
                navigation.navigate('IngredientsDetails', { ingredients, titles,item });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.instructions}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }


const mapStateToProps = state => ( {
  data: state.storeData
})
export default connect(mapStateToProps, null)(Recipe)
/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/
