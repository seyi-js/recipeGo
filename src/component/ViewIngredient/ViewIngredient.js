/* eslint-disable prettier/prettier */
import React from "react";
import { TouchableHighlight, Image, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ViewIngredient = (props) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,1,0.9)"
      onPress={props.onPress}
    >
      <View
        style={{
          ...styles.container,
          borderColor: props.data.DARK_MODE ? "#fff" : "#d44404",
        }}
      >
        <Text
          style={{
            ...styles.text,
            color: props.data.DARK_MODE ? "#fff" : "#d44404",
          }}
        >
          View Ingredients
        </Text>
      </View>
    </TouchableHighlight>
  );
};
ViewIngredient.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string,
};

export default ViewIngredient;
