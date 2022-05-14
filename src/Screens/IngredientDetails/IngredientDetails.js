/* eslint-disable prettier/prettier */
import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import ingredientFile from "../../Data/ingredients.json";
import { DARK_MODE, MODE } from "../../firebase/config";

export const IngredientDetails = ({ navigation, route, data }) => {
  //Get Ingrediesnts Info
  const getIngredientInfo = (ingredientID) => {
    let name;
    let image;
    let id;
    ingredientFile.map((data) => {
      if (data.ingredientId == ingredientID) {
        name = data.name;
        image = data.photo_url;
        id = data.ingredientId;
      }
    });
    return { name, image, id };
  };

  const onPressIngredient = (item) => {
    let name = getIngredientInfo(item[0]).name;
    let id = getIngredientInfo(item[0]).id;
    let image = getIngredientInfo(item[0]).image;
    navigation.navigate("Ingredient", { id, name, image });
  };

  const renderIngredient = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressIngredient(item)}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: data.DARK_MODE ? "#000" : "#fff",
        }}
      >
        <Image
          style={styles.photo}
          source={{ uri: getIngredientInfo(item[0]).image }}
        />
        <Text
          style={{ ...styles.title, color: data.DARK_MODE ? "#fff" : "#000" }}
        >
          {getIngredientInfo(item[0]).name}
        </Text>
        <Text style={{ color: data.DARK_MODE ? "#fff" : "grey" }}>
          {item[1]}
        </Text>
      </View>
    </TouchableHighlight>
  );
  const { ingredients } = data;

  const item = route.params.ingredients;
  const ingredientsArray = item;
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: data.DARK_MODE ? "#000" : "#fff" }}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={(item) => Date.now() * Math.random(100)}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  data: state.storeData,
});
export default connect(mapStateToProps, null)(IngredientDetails);
