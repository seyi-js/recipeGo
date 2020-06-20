/* eslint-disable prettier/prettier */
import React from 'react'
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BackButton = ({navigation}) => {
    return (
        <TouchableHighlight onPress={()=>navigation.goBack()} style={styles.btnContainer}>
          <Image source={require('../../../assets/icons/backArrow.png')} style={styles.btnIcon} />
        </TouchableHighlight>
      );
}
BackButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string
  };
export default BackButton
