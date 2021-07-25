/* eslint-disable prettier/prettier */
import React, {useState,useEffect,useLayoutEffect} from 'react'
import {
    FlatList,
    Text,
    View,
    Image,
    TouchableHighlight
  } from 'react-native';
  import styles from './styles';
  import { ListItem, SearchBar } from 'react-native-elements';
  import MenuImage from '../../component/MenuImage/MenuImage';
  import rest_config from '../../../rest_config';
  import recipes from '../../Data/recipes.json'
  import categories from '../../Data/categories.json'
const Search = ({navigation}) => {
    const [ data, setData ] = useState( [] )
    const [ value, setValue ] = useState( '' )
    //Handle Search Input
    const handleSearch = text => {
        const query= 'burger'
        
        if ( text == '' ) {
            setValue( text )
            setData([])
        } else {
            setValue( text );
             
            let results = []

            recipes.map(recipe=> {
              if( recipe.title.includes(text)){
                results.push(recipe)
              }

              

            })

            setData(results)
            
        }
    }
    //Update params on component load
    useLayoutEffect( () => {
      navigation.setParams( {
        getValue,
        handleSearch,
       
        
    } );
  
    },[navigation])
 
    const getValue = () => {
        return value
    }
    const onPressRecipe = item => {
        navigation.navigate('Recipe', { item });
      };
    const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: `${item.photo_url}` }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}>{categories.find( category => category.id == item.categoryId) ? categories.find(category => category.id == item.categoryId).name : 'null'}</Text>
          </View>
        </TouchableHighlight>
      );
    const notAvailable =  (
        <View style={ {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            
        } }>
            <Text style={{borderWidth: 1, padding: 20, borderRadius: 9, fontSize: 30}} >opps!! data not found</Text>
        </View>
        )
    return (
    <>
        {( data.length === 0 ) ? notAvailable :
            <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.id}`}
        />
      </View>
        }
        </>
    )
}

export default Search
