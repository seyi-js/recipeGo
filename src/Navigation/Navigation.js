/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { Switch } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "../react-redux/store/store";
import { loadData } from "../react-redux/action/actions";
import SplashScreen from "../Screens/Splash/Splash";
import HomeScreen from "../Screens/Home/HomeScreen";
import MenuImage from "../component/MenuImage/MenuImage";
import BackButton from "../component/BackButton/BackButton";
import Draw from "../Screens/Drawer/Drawer";
import Categories from "../Screens/Categories/Categories";
import RecipeList from "../Screens/RecipeList/RecipeList";
import Recipe from "../Screens/Recipe/Recipe";
import Ingredient from "../Screens/Ingredients/Ingredients";
import IngredientDetails from "../Screens/IngredientDetails/IngredientDetails";
import { ListItem, SearchBar } from "react-native-elements";
import Search from "../Screens/Search/Search";
import Register from "../Screens/Authentication/Register/Register";
import Login from "../Screens/Authentication/Login/Login";
import { changeMode } from "../react-redux/action/actions";
const Stack = createStackNavigator();

const Navigating = () => {
  const [state, setState] = useState({
    isEnabled: false,
  });

  const { isEnabled } = state;

  const setToggle = () => {
    store.dispatch(changeMode());
    setState({ ...state, isEnabled: !isEnabled });

    // if (isEnabled) {
    //   DARK_MODE = false;
    // }
  };
  return (
    <Stack.Navigator>
      {/* <Stack.Screen options={ { headerShown: false } } name="splash" component={ SplashScreen } /> */}
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Home",

          headerStyle: {
            backgroundColor: "#fff",
          },
          headerLeft: () => (
            // console.log(navigation)
            <MenuImage navigation={navigation} />
          ),
          headerRight: () => (
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setToggle()}
              value={isEnabled}
            />
          ),
        })}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({ title: route.params.title })}
        name="RecipeList"
        component={RecipeList}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerTransparent: "true",
          title: "",
          // headerStyle: {
          //   backgroundColor: '#fff',
          // },
          headerLeft: () => <BackButton navigation={navigation} />,
        })}
        name="Recipe"
        component={Recipe}
      />

      <Stack.Screen
        options={({ navigation, route }) => ({ title: route.params.name })}
        name="Ingredient"
        component={Ingredient}
      />
      <Stack.Screen
        options={({ navigation, route }) => ({
          title: route.params.titles,
          headerTitleStyle: {
            fontSize: 16,
          },
        })}
        name="IngredientsDetails"
        component={IngredientDetails}
      />

      <Stack.Screen
        options={({ navigation, route }) =>
          searchOptions({ navigation, route })
        }
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Main"
      drawerStyle={{
        width: 250,
      }}
      drawerContent={Draw}
    >
      <Drawer.Screen name="Main" component={Navigating} />
    </Drawer.Navigator>
  );
}

export const Navigation = () => {
  useEffect(() => {
    store.dispatch(loadData());
  }, []);
  return (
    <SafeAreaProvider style={{ backgroundColor: "black" }}>
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;

//Search Bar Options
const searchOptions = ({ navigation, route }) => ({
  headerRight: () => <MenuImage navigation={navigation} />,
  headerTitle: () => (
    <SearchBar
      // noIcon
      containerStyle={{
        backgroundColor: "transparent",
        borderBottomColor: "transparent",
        borderTopColor: "transparent",
        flex: 1,
      }}
      inputContainerStyle={{
        backgroundColor: "#EDEDED",
      }}
      inputStyle={{
        backgroundColor: "#EDEDED",
        borderRadius: 10,
        color: "black",
      }}
      searchIcon
      clearIcon
      // lightTheme
      round
      onChangeText={(text) => route.params.handleSearch(text)}
      onClear={() => route.params.handleSearch("")}
      placeholder="Search"
      value={() => (route.params ? `${route.params.getValue()}` : "")}
    />
  ),
});
