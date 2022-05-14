/* eslint-disable prettier/prettier */
import React from "react";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import store from "./src/react-redux/store/store";
import { View } from "react-native";
import { MODE } from "./src/firebase/config";
export const App = () => {
  return (
    <Provider store={store}>
      {/* <View style={{ backgroundColor: MODE }}> */}
      <Navigation />
      {/* </View> */}
    </Provider>
  );
};

export default App;
