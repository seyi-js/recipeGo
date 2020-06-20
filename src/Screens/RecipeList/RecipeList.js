/* eslint-disable prettier/prettier */
import React  from 'react'
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux'
const RecipeList = ({navigation,route,data }) => {

  const onPressRecipe = item => {
    navigation.navigate('Recipe', { item });
  };
  const renderRecipes = ({ item}) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  const {categories, recipes} = data
  //Get Reciepes
  const getRecipes = (categoryId) => {
    const recipesArray = [];
    recipes.map(data => {
      if (data.categoryId == categoryId) {
        recipesArray.push(data);
      }
    });
    return recipesArray;
  }

  //getCategoryName
  const getCategoryName = (categoryId) => {
    let name;
    categories.map(data => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  }
  const item = route.params.category;
  // console.log(item)
    const recipesArray = getRecipes(item.id);
  return (
    <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
  )
}
const mapStateToProps = state => ( {
  data: state.storeData
})
export default connect(mapStateToProps, null)(RecipeList)
