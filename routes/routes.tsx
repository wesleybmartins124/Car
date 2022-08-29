import React from "react"
import Splash from '../src/Splash';
import SignUp from '../src/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const Routes = () => {
    return(
     
      <Stack.Navigator  initialRouteName="Splash">
        <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
         </Stack.Navigator>
         
    )
 }
 
 export default Routes;