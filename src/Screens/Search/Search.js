/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react'
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
  import rest_config from '../../../rest_config'

const Search = ({navigation}) => {
    const [ data, setData ] = useState( [] )
    const [ value, setValue ] = useState( '' )
    //Handle Search Input
    const handleSearch = text => {
        const query= 'burger'
        const config = {
            headers: {
              "x-rapidapi-host": rest_config.API_HOST,
              "x-rapidapi-key": rest_config.API_KEY
            }
          }
        if ( text == '' ) {
            setValue( text )
            setData([])
        } else {
            setValue( text )
            fetch( `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=20&query=${text}`,config )
                .then( res => res.json() )
                .then( res => setData(res) )
                .catch(err=> console.log(err))
        }
    }
    //Update params on component load
    useEffect( () => {
       setUpdate()
    }, [] )
    //Updating params
    const setUpdate = () => {
        navigation.setParams( {
            getValue,
            handleSearch,
            
        } );
        
    }
    const getValue = () => {
        return value
    }
    const onPressRecipe = item => {
        navigation.navigate('Recipe', { item });
      };
    const renderRecipes = ({ item }) => (
        <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => onPressRecipe(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: `https://spoonacular.com/recipeImages/${item.image}` }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.category}></Text>
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
        {( data.totalResults === 0 ) ? notAvailable :
            <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data.results}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.id}`}
        />
      </View>
        }
        </>
    )
}

export default Search
