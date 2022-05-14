/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import recipes from "../../Data/recipes.json";
import categories from "../../Data/categories.json";
import { MODE } from "../../firebase/config";
const RecipeList = ({ navigation, route, data }) => {
  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };
  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  // const {categories, recipes} = data
  //Get Reciepes
  const getRecipes = (categoryId) => {
    const recipesArray = [];
    recipes.map((data) => {
      if (data.categoryId == categoryId) {
        recipesArray.push(data);
      }
    });

    return recipesArray;
  };

  //getCategoryName
  const getCategoryName = (categoryId) => {
    let name;
    categories.map((data) => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  };
  const category = route.params.category;
  // console.log(item)
  const recipesArray = getRecipes(category.id);
  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        style={{ backgroundColor: MODE }}
        data={recipesArray}
        renderItem={renderRecipes}
        keyExtractor={(item) => Date.now() * Math.random(100)}
      />
    </View>
  );
};
const mapStateToProps = (state) => ({
  data: state.storeData,
});
export default connect(mapStateToProps, null)(RecipeList);
