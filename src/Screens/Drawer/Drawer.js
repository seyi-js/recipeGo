/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../component/MenuButton/MenuButton';



const Drawer = ({navigation}) => {
    return (
        <View style={styles.content}>
        <View style={styles.container}>
          <MenuButton
            title="HOME"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
         
          <MenuButton
            title="SEARCH"
            source={require('../../../assets/icons/search.png')}
            onPress={() => {
              navigation.navigate('Search');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    )
}
Drawer.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    })
  };
export default Drawer
