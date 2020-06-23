/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign'
const BackButton = ({navigation}) => {
    return (
        <TouchableHighlight onPress={()=>navigation.goBack()} style={styles.btnContainer}>
          <Icon  name="back"/>
        </TouchableHighlight>
      );
}
BackButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string
  };
export default BackButton
