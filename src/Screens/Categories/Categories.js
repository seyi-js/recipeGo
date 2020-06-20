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
import {connect} from 'react-redux'
const Categories = (props) => {

  const { categories, recipes } = props.data
  //get Number of recipes
  const getNumberOfRecipes = (categoryId) => {
    let count = 0;
    recipes.map(data => {
      if (data.categoryId == categoryId) {
        count++;
      }
    });
    return count;
  }
    // console.log(categories)
    const onPressCategory = item => {
        const title = item.name;
        const category = item;
        props.navigation.navigate('RecipeList', { category, title });
    };
    const renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressCategory(item)}>
          <View style={styles.categoriesItemContainer}>
            <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
            <Text style={styles.categoriesName}>{item.name}</Text>
            <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
          </View>
        </TouchableHighlight>
      );
    return (
        <View>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    )
}
const mapStateToProps = state => ( {
    data: state.storeData
})
export default connect(mapStateToProps, null)(Categories)
