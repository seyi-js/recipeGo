/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import rest_config from "../../../rest_config";
import recipes from "../../Data/recipes.json";
import { MODE } from "../../firebase/config";
export const Ingredients = ({ navigation, route, data }) => {
  const [sameIn, setSameIn] = useState([]);
  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <TouchableHighlight
        underlayColor="rgba(73,182,77,1,0.9)"
        onPress={() => onPressRecipe(item)}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: data.DARK_MODE ? "#000" : "#fff",
          }}
        >
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text
            style={{ ...styles.title, color: data.DARK_MODE ? "#fff" : "#000" }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              ...styles.category,
              color: data.DARK_MODE ? "#fff" : "#000",
            }}
          ></Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  //Recipes By Ingredient
  const getRecipesByIngredient = (ingredientName) => {
    let data = [];
    const config = {
      headers: {
        "x-rapidapi-host": rest_config.API_HOST,
        "x-rapidapi-key": rest_config.API_KEY,
      },
    };
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=${ingredientName}`,
      config
    )
      .then((res) => res.json())
      .then((res) => setSameIn(res))
      .catch((err) => console.log(err));

    return data;
  };

  const getRecipesById = (id) => {
    return recipes.map((recipe) => {
      recipe.ingredients.find((ig) => ig[0] == id);

      return recipe;
    });
  };

  const ingredientName = route.params.name;
  const image = route.params.image;
  const id = route.params.id;
  useEffect(() => {
    setSameIn(getRecipesById(id));
  }, [id]);

  return (
    <>
      <View>
        <View
          style={{
            borderBottomWidth: 0.4,
            marginBottom: 10,
            borderBottomColor: "grey",
          }}
        >
          <Image style={styles.photoIngredient} source={{ uri: `${image}` }} />
        </View>
        <Text
          style={{
            ...styles.ingredientInfo,
            // color: data.DARK_MODE ? "#fff" : "#000",
          }}
        >
          Recipes with {ingredientName}:
        </Text>
      </View>
      <View style={{ marginBottom: 30 }}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: data.DARK_MODE ? "#18191a" : "#fff" }}
          numColumns={2}
          data={sameIn}
          renderItem={renderRecipes}
          keyExtractor={(item) => Date.now() * Math.random(100)}
        />
      </View>
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.storeData,
});
export default connect(mapStateToProps, null)(Ingredients);
