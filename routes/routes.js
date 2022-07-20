import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Splash from './Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Routes = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
         </Stack.Navigator>
    )
 }
 
 export default Routes;