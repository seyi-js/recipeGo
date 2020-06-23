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
      let name = item.name;
      let ingredient = item.id;
      let image = item.image;
        navigation.navigate('Ingredient', { ingredient, name,image });
    };
    
  
    const  renderIngredient = ({ item }) => (
                
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressIngredient(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}` }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={{ color: 'grey' }}>{item.unit}</Text>
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

    
    const item = route.params.ingredients;
    const ingredientsArray = item;
    return (
        <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={renderIngredient}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    )
}

const mapStateToProps = (state) => ( {
  data: state.storeData
})
export default connect(mapStateToProps, null)(IngredientDetails )