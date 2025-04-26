import { Stack } from "expo-router";
import {useFonts} from "expo-font";
import {CreateTripContext} from '../context/CreateTripContext'
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-light':require('./../assets/fonts/Outfit-Light.ttf')
  })
    
  const [tripData,setTripData] =  useState([]);

  return(
    <CreateTripContext.Provider value={{tripData,setTripData}}>
  <Stack screenOptions={{headerShown:false}}>
   <Stack.Screen name='index'/>
   <Stack.Screen name="(tabs)"/>
  </Stack>
  </CreateTripContext.Provider>
  
  );
}
