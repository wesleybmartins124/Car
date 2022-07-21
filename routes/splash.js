import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import LottieView from  "lottie-react-native";


export default function Splash(){
  return(
    <View style={styles.container}>
       <Image style={styles.waves}
      source={require('../assets/DarkWave.gif')}/>
       <Image style={styles.logo}
      source={require('../assets/gurgel.png')}/>
      </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C2DDF0'
  },
  waves:{
    flex:1,
        width:"80%",
        height:"100%",
        marginTop:"50%",
        justifyContent:"center"
  },
  logo:{
    width:"100%",
    height:"50%"
  }
});