import React , { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"
import { useNavigation } from '@react-navigation/native'

export default function SplashScreenGurgel() {


  return (
    <View style={styles.SplashScreenGurgel}>
      <Image
        style={styles._85668DarkWaves1}
        source={require('../assets/DarkWave.gif')}
      />
      <Image style={styles.Vector2}source={require('../assets/Vector2.png')}/>
      <Image style={styles.Vector1} source={require('../assets/Vector1.png')} />
      <Image style={styles.Gurgel1}  source={require('../assets/gurgel.png')}
      />
   
    </View>
    
  )
}

const styles = StyleSheet.create({
  SplashScreenGurgel: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    backgroundColor: "rgba(194,221,240,1)",
    width: "100%",
    height: "100%",
  },
  _85668DarkWaves1: {
    position:"relative",
    top: 358,
    width: '100%',
    height: '100%',
  },
  Vector2: {
    position: "absolute",
    top: 320,
    left: 0,
    width: 415.29,
    height: 600,
  },
  Vector1: {
    position: "absolute",
    top: 120,
    left: -20,
    width: 450.83,
    height: 299.95,
  },
  Gurgel1: {
    position: "relative",
    top: -500,
    left: 10,
    width: 290,
    height: 124.9,
  },
})