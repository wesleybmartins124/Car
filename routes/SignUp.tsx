import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function SignUp() {
  return (
    <View style={styles.SignUp}>
      <View style={styles.Group2103}>
        <Image
          style={styles.Gurgelvertical1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2w6q7m71639-56%3A3?alt=media&token=58f8e5a6-ba75-467e-88ab-5b84e313adc0",
          }}
        />
        <Text style={styles.multiple1}>Auto lá....</Text>
        <Text style={styles.Txt8510}>
          Para continuar dentro do Mundo Gurgel, registre-se com o Google ou
          outro E-mail
        </Text>
        <Image
          style={styles.Animation_500_l5vsdmj81}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2w6q7m71639-45%3A34?alt=media&token=247b524f-5b01-4c3a-a0f9-1a63358ed78a",
          }}
        />
        <View style={styles.ButtonGoogle}>
          <Image
            style={styles.IconGoogle}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/2w6q7m71639-40%3A19?alt=media&token=99b14bdc-55d7-437f-9442-808927dfbc70",
            }}
          />
          <Text style={styles.Txt695}>Registre-se com Google</Text>
        </View>
        <Text style={styles.Txt566}>ou</Text>
        <View style={styles.Button}>
          <Text style={styles.Txt414}>Registre com o E-mail</Text>
        </View>
        <View style={styles.Frame162462}>
          <Text style={styles.multiple2}>Já tem uma conta? Login</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SignUp: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 11,
    paddingBottom: 25,
    paddingLeft: 11,
    paddingRight: 11,
    backgroundColor: "rgba(21,67,96,1)",
    width: 360,
    height: 800,
  },
  Group2103: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Gurgelvertical1: {
    width: 80,
    height: 80,
    marginBottom: 13,
  },
  multiple1: {
    main: "Txt1063",
    seg1: "[object Object]",
    seg2: "[object Object]",
  },
  Txt8510: {
    fontSize: 15,
    fontFamily: "Inter, sans-serif",
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "rgba(152,152,158,1)",
    textAlign: "center",
    justifyContent: "center",
    width: 327,
    marginBottom: 3,
  },
  Animation_500_l5vsdmj81: {
    width: 336,
    height: 348,
    marginBottom: 39,
  },
  ButtonGoogle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 23,
    paddingRight: 23,
    marginBottom: 13,
    borderRadius: 15,
    backgroundColor: "white",
    /*  linear-gradient(0deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) */
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 327,
  },
  IconGoogle: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  Txt695: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    color: "rgba(28,28,35,1)",
  },

  Txt566: {
    fontSize: 20,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    width: 327,
    marginBottom: 11,
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 11,
    paddingRight: 11,
    marginBottom: 26,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(255,",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 324,
  },
  Txt414: {
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    color: "rgba(255, 255, 255, 1)",
  },

  Frame162462: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 9,
    paddingBottom: 9,
    paddingLeft: 9,
    paddingRight: 9,
    width: 325,
  },
  multiple2: {
    main: "Txt389",
    seg1: "[object Object]",
    seg2: "[object Object]",
  },
})