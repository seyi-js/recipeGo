/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StatusBar,
  Animated
} from 'react-native';
import styles from './styles';

export const SplashScreen=({navigation})=> {
  const [ LogoAnime, setLogoAnime ] = useState( new Animated.Value( 0 ) )
  const [LogoText, setLogoText] =useState(new Animated.Value(0))
  
  useEffect( () => {
    Animated.parallel( [

        //Animating Logo
        Animated.spring( LogoAnime, {
            toValue: 1,
            tension: 10,
            friction: 2,
            duration: 4000,
            useNativeDriver: false
        }).start(),

        //Animating Text
        Animated.timing( LogoText, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false
      })
    ]).start(()=> navigation.replace('Home'))
},[])
    return (
      <View style={ styles.container }>
      <StatusBar barStyle="light-content" backgroundColor="#d44404" />
        <Animated.View style={ {
          opacity: LogoAnime,
          top: LogoAnime.interpolate( {
              inputRange: [ 0, 1 ],
              outputRange: [80,0]
          })
      } }>
        <Image style={styles.photo} source={require('../../../assets/splashLogo.png')} />
        </Animated.View>
        
      </View>
    );
  }
export default SplashScreen