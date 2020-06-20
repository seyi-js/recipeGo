/* eslint-disable prettier/prettier */
import React from 'react'
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
  } from 'react-native';
  import styles from './styles';
import { connect } from 'react-redux';
export const IngredientDetails =({navigation,route, data}) =>{

    const onPressIngredient = item => {
        let name = getIngredientName(item.ingredientId);
        let ingredient = item.ingredientId;
        navigation.navigate('Ingredient', { ingredient, name });
    };
    
  
    const  renderIngredient = ({ item }) => (
                
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressIngredient(item[0])}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
            <Text style={styles.title}>{item[0].name}</Text>
            <Text style={{ color: 'grey' }}>{item[1]}</Text>
          </View>
        </TouchableHighlight>
  );
  const {ingredients} = data
  //Get Ingrediesnts Name
  const getIngredientName = (ingredientID) => {
    let name;
    ingredients.map(data => {
      if (data.ingredientId == ingredientID) {
        name = data.name;
      }
    });
    return name;
  }
  //Get all Ingredients
  const getAllIngredients = (idArray) => {
    const ingredientsArray = [];
    idArray.map(index => {
      ingredients.map(data => {
        if (data.ingredientId == index[0]) {
          ingredientsArray.push([data, index[1]]);
        }
      });
    });
    return ingredientsArray;
  }
    
    const item = route.params.ingredients;
    const ingredientsArray = getAllIngredients(item);
    return (
        <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={renderIngredient}
          keyExtractor={item => `${item[0].ingredientId}`}
        />
      </View>
    )
}

const mapStateToProps = (state) => ( {
  data: state.storeData
})
export default connect(mapStateToProps, null)(IngredientDetails )