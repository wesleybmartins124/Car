import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function SplashScreenGurgel() {
  return (
    <View style={styles.SplashScreenGurgel}>
      <Image
        style={styles._85668DarkWaves1}
        source={require('../assets/DarkWave.gif')}
      />
      <Image style={styles.Vector2}source={require('../assets/Vector2.png')}/>
      <Image style={styles.Vector1} source={require('../assets/Vector1.png')} />
      <Image style={styles.Gurgel1}  source={require('../assets/gurgel.png')}/>
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
    position: "absolute",
    top: 328,
    left: 12,
    width: 400,
    height: 532,
  },
  Vector2: {
    position: "absolute",
    top: 255,
    left: 38,
    width: 307.29,
    height: 485,
  },
  Vector1: {
    position: "absolute",
    top: 69,
    left: 25,
    width: 378.83,
    height: 99.95,
  },
  Gurgel1: {
    position: "absolute",
    top: 182,
    left: 0,
    width: 151,
    height: 78,
  },
})