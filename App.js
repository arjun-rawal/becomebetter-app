import React from "react";
import {Pressable, StyleSheet} from 'react-native'
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Button, ColorMode, Image, Center } from "native-base";
export default function App() {
  
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" >
          
          <Pressable  style={styles.motivation} onPress={()=>{console.log("hello")}}>
          <Image position='absolute' size={280} zIndex={1} alt="fallback text"  source={require("./assets/istockphoto-1255203350-612x612.jpg")} />
      </Pressable>
        </Box>
    </NativeBaseProvider>
  );
}

const styles= StyleSheet.create({
  motivation:{
    alignItems:'center',
    position:'absolute',
    paddingLeft: '100%',
    paddingTop: '100%'
  }
})