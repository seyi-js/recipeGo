/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles';

import { TouchableOpacity, Image } from 'react-native';


const MenuImage = ( { navigation }) => {
    return (
        <TouchableOpacity style={styles.headerButtonContainer} onPress={()=> navigation.openDrawer()}>
        <Image
          style={styles.headerButtonImage}
          source={require('../../../assets/icons/menu.png')}
        />
      </TouchableOpacity>
    )
}
MenuImage.propTypes = {
    onPress: PropTypes.func
  };
export default MenuImage
