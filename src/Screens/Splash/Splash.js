/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  StatusBar
} from 'react-native';
import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={ styles.container }>
      <StatusBar barStyle="light-content" backgroundColor="#2cd18a" />
        
        <Image style={styles.photo} source={require('../../../assets/icons/cookie100.png')} />
      </View>
    );
  }
}