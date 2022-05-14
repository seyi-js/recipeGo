/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator,
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { connect } from "react-redux";
import recipes from "../../Data/recipes.json";
import categories from "../../Data/categories.json";
import { MODE } from "../../firebase/config";
export const HomeScreen = (props) => {
  const [isConnected, setIsConnected] = useState();

  useEffect(() => {
    check();

    return () => {
      console.log("");
    };
  }, []);
  // Subscribe to the network, so when theres is a network change, it reloads
  const check = () => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log("Connection type", state.type);
      // console.log( "Is connected?", state.isConnected );
      setIsConnected(true);
    });
  };

  // Unsubscribe
  // unsubscribe();

  // const {recipes} = props.data
  // console.log(recipes)
  const onPressRecipe = (item) => {
    props.navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View
        style={{
          ...styles.container,
          borderColor: props.data.DARK_MODE ? "#000" : "#cccccc",
          backgroundColor: props.data.DARK_MODE ? "#000" : "#fff",
        }}
      >
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text
          style={{
            ...styles.title,
            color: props.data.DARK_MODE ? "#fff" : "#444444",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            ...styles.category,
            color: props.data.DARK_MODE ? "#fff" : "#000",
          }}
        >
          {categories.find((category) => category.id == item.categoryId)
            ? categories.find((category) => category.id == item.categoryId).name
            : "null"}
        </Text>
      </View>
    </TouchableHighlight>
  );
  //When there isnt a connection
  const renderOnNoConnection = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" hidden />
      <Text
        style={{ borderWidth: 2, padding: 20, fontSize: 20, borderRadius: 10 }}
      >
        opps!!! Connect to the Internet{" "}
      </Text>
    </View>
  );

  const renderOnLoading = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" hidden />
      <ActivityIndicator />
      <Text
        style={{ borderWidth: 2, padding: 20, fontSize: 20, borderRadius: 10 }}
      >
        opps!!! Connect to the Internet{" "}
      </Text>
    </View>
  );

  return (
    <>
      {isConnected ? (
        <View>
          <StatusBar barStyle="light-content" backgroundColor="#000" hidden />

          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            style={{
              backgroundColor: props.data.DARK_MODE ? "#18191a" : "#fff",
            }}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => Date.now() * Math.random(100)}
          />
        </View>
      ) : (
        renderOnNoConnection
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  data: state.storeData,
});
export default connect(mapStateToProps, null)(HomeScreen);
