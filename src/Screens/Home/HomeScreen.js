/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, ScrollView,StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import { connect } from 'react-redux'
export const HomeScreen = (props) => {

  
  const {recipes,categories} = props.data
   const onPressRecipe = item => {
      props.navigation.navigate('Recipe', { item });
    };

  //Get CategoryName
  const getCategoryName = (categoryId) => {
    let name;
    categories.map(data => {
      if (data.id == categoryId) {
        name = data.name;
      }
    });
    return name;
  }
    // console.log(recipes)
    const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.photo_url }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
          </View>
        </TouchableHighlight>
      );
    return (
        <View>
      <StatusBar barStyle="light-content" backgroundColor="#000" hidden />
       
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipes}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    )
}
const mapStateToProps = state => ( {
    data: state.storeData
})
export default connect(mapStateToProps, null)(HomeScreen)