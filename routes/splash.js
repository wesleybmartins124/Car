import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet,Image,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import LottieView from  "lottie-react-native";


export default function Splash(){
  return(
    <View style={styles.container}>
      <LottieView source={require("./assets/DarkWave.json")}> </LottieView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#C2DDF0'
  },
})