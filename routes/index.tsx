import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import Splash from '../src/Splash';
import SignUp from '../src/SignUp';

function Routes(){
  const signed = false;
  const loading = false;

  if(loading){
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#36393F'}}>
      <ActivityIndicator size={50} color="#E52246" />
    </View>
  }
  
  return(
    signed ? <Splash/> : <SignUp/>
  )
}

export default Routes;